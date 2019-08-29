<template>

  <div>


    <div>
    <h2>Employee Test </h2>

      <el-button  @click=" dialogTableVisible1 = true"> new </el-button>


      <el-dialog
        :title="test"






      >





      </el-dialog>





    </div>


    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%">

        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>

        <el-table-column
          prop="position"
          label="职位"
          width="180">
        </el-table-column>

        <el-table-column
          prop="power"
          label="权限"
          width="180">
        </el-table-column>

        <el-table-column
          prop="password"
          label="联系方式"
          width="230">
        </el-table-column>

        <el-table-column
          prop="operate"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="dialogFormVisible = true ">Edit</el-button>

            <el-dialog title="就改呗" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="你的职位" :label-width="formLabelWidth">
                  <el-input v-model="form.position" autocomplete="off"></el-input>
                </el-form-item>


                <el-form-item label="权限" :label-width="formLabelWidth">
                  <el-select v-model="form.power" >
                    <el-option label="管理员" value="admin"></el-option>
                    <el-option label="用户" value="user"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click=" handleEdit(scope.$index, scope.row),  dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>


            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>

      </el-table>


      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>


    </div>

  </div>
</template>

<script>
    export default {
      name: "employee",
      data(){
        return{
          tableData:[
          ],
          dialogFormVisible1:false,
          dialogFormVisible: false,
          form: {
            position: '',
            power: ''
          },
          formLabelWidth: '120px'
        }
      },
      inject: ['reload'],
      methods:{

        handleEdit(index,row){
          // console.log(this.form.power);
          let formdata = new FormData;
          formdata.append("name",row.name);
          formdata.append("position",this.form.position);
          formdata.append("power",this.form.power);
          axios.post("http://localhost:8080/api/change",formdata)
            .then((response) => {
              if (response.status === 200){this.reload()}
              else {console.log(response);}
            })
        },

        handleClose(){},


        handleDelete(index,row){

          let formdata = new FormData();
          formdata.append("name",row.name);
          axios.post("http://localhost:8080/api/delete",formdata)
            .then((response) => {
              if (response.status === 200){this.reload()}
              else {console.log(response);}
            })
        },

        newone:function () {

        }
      },
      created:function () {
        var _this = this;
        console.log(this.tableData);
        axios.get("http://localhost:8080/api/employee")
          .then((response) => {
              this.tableData = response.data.message;
            }
          // .then(function (response) {
          //   console.log("in function this = " + _this);
          //   _this.tableData = response.data.message;
          // }
        )
      }

      }
</script>

<style scoped>

</style>
