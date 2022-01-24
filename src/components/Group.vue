<template>

  <div id="groupStyle">
    <!-- 下拉菜单 -->
    <el-dropdown size="large" split-button type="primary" trigger="click">                                                                                      manager_id
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item v-for="item in managerListId" :key="item" :value="item" @click.native="update(item)">
          {{item}}</el-dropdown-item>
        <!--<el-dropdown-item @click="manager_id=22">22</el-dropdown-item>-->
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!-- 穿梭框 -->
    <div style="text-align: center">

      <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'agent_id']"
        :button-texts="['取消管理', '添加管理']"
        :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
        @change="handleChange"
        :data="data">
        <el-button class="transfer-footer" slot="left-footer" size="small" @click="saveRelevance()">操作</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small" @click="saveRelevance()">操作</el-button>
      </el-transfer>
    </div>
  </div>
</template>

<style>
/* 穿梭框外框高宽 */
    /* .el-transfer-panel{
        width: 300px;
        height: 500px;
    }
    /* 穿梭框内部展示列表 */
    /* .el-transfer-panel__list.is-filterable{
        height: 200px;
    }; */

#groupStyle{
  text-align: left;
  line-height: 20px;
}
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>

<script>
import axios from "axios";
import {Host, myPort, Protocol, User} from "../config/untils";

 // 路由的导出
export default {
  name:"Group",
  data() {
    const generateData = _ => {
      const data = [];
      let self=this
      axios.get(Protocol+Host+':'+myPort+'/user/allAccount')
        .then(function (res) {
          let accounts = res.data.model
          self.accountArray = accounts
          for (let i = 0; i < accounts.length; i++) {
            data.push({
              key: accounts[i].account_id,
              label: accounts[i].account_alias,
            });
          }
        })
      console.log(data);
      console.log("data");
      return data;
    };
    return {
      managerListId: [],
      finalRelevance:[],
      accountsHistory:[],
      accountArray:[],
      data: generateData(),
      value: [],
      renderFunc(h, option) {
        return <span>{ option.key } - { option.label }</span>;
      }
    };
  },

  methods: {
    update(command){
     console.log(command);
     User.account_id=command;
     this.getHistoryRelevance();
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    getHistoryRelevance(){
      let self=this
      axios.get(Protocol+Host+':'+myPort+'/user/managementAccountFromID/'+User.account_id)
        .then(function (res){
          self.accountsHistory=res.data.model
          console.log(self.accountsHistory);
          console.log("accountHistory");
          self.moveHistoryRelevance()
          self.getManagerId()
        })
    },
    moveHistoryRelevance(){
      this.value=[]
      let self=this
      console.log(this.accountArray);
      console.log("accountArray");
      for (let i=0;i<self.accountsHistory.length;i++){
        for (let j=0;j<self.accountArray.length;j++){
          if (self.accountsHistory[i].account_id===self.accountArray[j].account_id){
            console.log("j:"+j)
            self.value.push(j+1)
            console.log(self.value);
            console.log("self.value");
            console.log(self.data[self.value[i]])
            console.log("self.data["+self.value[i]+"]")
            break
          }
        }
      }
    },
    buildFinalRelevance(){
      this.finalRelevance=[]
      let self=this
      for (let i=0;i<self.value.length;i++){
        self.finalRelevance.push(self.data[self.value[i]-1].key)
      }
      console.log(this.finalRelevance);
    },
    saveRelevance(){
      this.buildFinalRelevance()
      let self = this
      axios.post(Protocol+Host+':'+myPort+'/user/saveRelevance/'+User.account_id,self.finalRelevance)
        .then(function (res) {
          if (res.data.state===true){
            self.getHistoryRelevance()
          }
        })
    },
    getManagerId(){
      let self = this
      axios.get(Protocol+Host+':'+myPort+'/user/allManagerId')
      .then(function(res){
            self.managerListId=res.data.model;
      })
    }

  },
  mounted() {
    this.getHistoryRelevance();

  }
};
</script>
