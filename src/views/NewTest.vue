

<template>
  <div>
    <div data-v-69b584c2 class="card">
      <div data-v-69b584c2 class="card-header">
        <div data-v-69b584c2>
          <h1>Register</h1>
        </div>
      </div>
      <div class="card-body">
        <div>
          <b-table hover :items="itemsReg" :fields="fieldsReg"></b-table>
        </div>
      </div>
    </div>
    <div data-v-69b584c2 class="card">
      <div data-v-69b584c2 class="card-header">
        <div data-v-69b584c2>
          <h2>Request</h2>
        </div>
      </div>
      <div class="card-body">
        <div>
          <h2>Request URL Parameters</h2>
          <b-table hover :items="itemsUrl" :fields="fieldsUrl" color="red"></b-table>
        </div>
        <h2>Request Header Parameters</h2>
        <b-table hover :items="itemsHeader" :fields="fieldsHeader"></b-table>
        <div>
          <h2>Request Body Parameters</h2>
          <b-table hover :items="itemsBody" :fields="fieldsBody"></b-table>
        </div>
      </div>
    </div>

    <div data-v-69b584c2 class="card">
      <div data-v-69b584c2 class="card-header">
        <div data-v-69b584c2>
          <h2>Request & Response</h2>
        </div>
      </div>
      <div class="card-body">
        <div>
          <h2>Request​ ​ Body Example</h2>
          <div id="vueapp">
            <!-- <textarea v-model="jsonStrReq" rows="5" cols="80"></textarea> -->
            <pre class="highlight">{{ jsonStrReq | pretty }}</pre>
          </div>
        </div>
        <div>
          <h2>Response Body</h2>
          <div id="vueapp">
            <pre class="highlight">{{ jsonStrRes | pretty }}</pre>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <h2>Note :</h2>
      <p>
        <br />Live = Url ของ Server จริง
        <br />Iot = Url ของ Server ทีใชใ้ นการทดสอบ และ พัฒนา
        <br />SV = Single value
        <br />MV = Multiple value
      </p>
    </div>-->
  </div>
</template>


<script>
export default {
  name: "newtest",
  new: "#vueapp",
  filters: {
    pretty: function(value) {
      return JSON.stringify(value, null, 2);
    }
  },
  data() {
    return {
      fieldsReg: [
        {
          key: "protocol",

          isRowHeader: true
        },
        {
          key: "HTTPS",
          class: "white-bg"
        }
      ],
      itemsReg: [
        {
          protocol: "Method",
          HTTPS: "POST"
        },
        {
          protocol: "Live",
          HTTPS: "https://​www.mfu.ac.th/api/v1/register"
        },
        {
          protocol: "Iot",
          HTTPS: "https://​10.1.4.82/api/v1/register"
        }
      ],
      fieldsUrl: [
        {
          key: "parameter_name",
          sortable: false
        },
        {
          key: "M_O",
          sortable: false,
          label: "M/O"
        },
        {
          key: "SV_MV",
          sortable: false,
          label: "SV/MV"
        },
        {
          key: "data_type",
          sortable: false
        },
        {
          key: "Description_Example",
          sortable: false
        }
      ],
      itemsUrl: [
        {
          isActive: true,
          parameter_name: "Authorization",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        }
      ],
      fieldsHeader: [
        {
          key: "parameter_name",
          sortable: false
        },
        {
          key: "M_O",
          sortable: false,
          label: "M/O"
        },
        {
          key: "SV_MV",
          sortable: false,
          label: "SV/MV"
        },
        {
          key: "data_type",
          sortable: false
        },
        {
          key: "Description_Example",
          sortable: false
        }
      ],
      itemsHeader: [
        {
          isActive: true,
          parameter_name: "Authorization",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "Content-Type",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: "application/json"
        },
        {
          isActive: true,
          parameter_name: "Language",
          M_O: "O",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: "th,en"
        },
        {
          isActive: true,
          parameter_name: "Platform",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        }
      ],
      fieldsBody: [
        {
          key: "parameter_name",
          sortable: false
        },
        {
          key: "M_O",
          sortable: false,
          label: "M/O"
        },
        {
          key: "SV_MV",
          sortable: false,
          label: "SV/MV"
        },
        {
          key: "data_type",
          sortable: false
        },
        {
          key: "Description_Example",
          sortable: false
        }
      ],
      itemsBody: [
        {
          isActive: true,
          parameter_name: "username",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "password",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "email",
          M_O: "M",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "moblie",
          M_O: "M",
          SV_MV: "MV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "fbId",
          M_O: "O",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "ggId",
          M_O: "O",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "igId",
          M_O: "O",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "image_profile",
          M_O: "O",
          SV_MV: "SV",
          data_type: "File",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "firstname",
          M_O: "O",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        },
        {
          isActive: true,
          parameter_name: "lastname",
          M_O: "O",
          SV_MV: "SV",
          data_type: "String",
          Description_Example: ""
        }
      ],
      jsonStrReq: {
        usename: "test22",
        password: "12345678",
        email: "s.chiewsakulwattana@hotmail.com",
        moblie: "12345678",
        fbid: "",
        ggid: "",
        image_profile: undefined,
        firstname: "",
        lastname: ""
      },
      jsonStrRes: {
        code: 20000,
        descriptionEn: "Success",
        description: "ทำรายการเรียบร้อย",
        data: {
          userid: "1512124232144",
          userType: 0,
          username: "test22",
          email: "test22@hotmail.com",
          mobile: "0999999922",
          userInfo: {
            lastname: "",
            image_profile: "http://202.44.53.159:8080/images/profile/"
          },
          transaction:
            "0a537362b33e09e18c1e2884e87e76855b312113c2aa8e320c3ac78560f80e18"
        }
      }
    };
  }
};
</script>

<style>
pre.highlight {
  border-radius: 4px;
  position: relative;
  padding: 10px 15px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  font-size: 12px;
  line-height: 16px;
  margin: 2em 0;
  font-family: Menlo, monospace;
}

th {
  background-color: rgb(114, 159, 206);
  color: white;
  border-bottom: 1pt solid black !important;
  border-top: 1pt solid black !important;
}
table,
th,
td {
  border: 1px solid black;
}

.boxsizingBorder {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.white-bg {
  background-color: white;
  color: black;
  font-weight: normal;
}
</style>


