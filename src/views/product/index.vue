<template>
  <div class="content-container">
<br><br>
  <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/images/product.jpeg" class="prod-image">
      <div class="prod-header">
      <div class="prod-seller">
      <h3><img src="@/assets/images/icons/profile.jpeg" class="prod-profile">  
      {{prodData.seller}}</h3>
      Trust Real Estate
      </div>
      <h2 class="prod-stars"><i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-off"></i></h2>
      <h2 style="text-align: left"> Patio Area At Home</h2>
      <p><i class="el-icon-location-outline"></i> 145, Street United States - 1000</p>
      </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis autem cumque fugit recusandae neque nesciunt odio distinctio reprehenderit error. Error facere eius deleniti? Necessitatibus fuga officia eligendi impedit suscipit.</p>
         <table class="prod-table">
            <tr>
                <th><img src="@/assets/images/icons/bedroom.jpg" class="prod-icon"></th>
                <th><img src="@/assets/images/icons/bathroom.png" class="prod-icon"></th>
                <th><img src="@/assets/images/icons/sqft.png" class="prod-icon"></th>
            </tr>
            <tr>
              <td>{{prodData.bedroom}}</td>
              <td>{{prodData.bathroom}}</td>
              <td>{{prodData.areasqft}}</td>
            </tr> 
            <tr>
              <td><h6>BEDROOM</h6></td>
              <td><h6>BATHROOM</h6></td>
              <td><h6>AREA SQFT</h6></td>
            </tr>
        </table> 
        <h2>{{ prodData.price }}</h2>
        <br>
        <div class="bottom clearfix">
          <el-popover
            placement="bottom"
            title="Warning"
            width="200"
            trigger="click"
            content="You can't negotiate">
    <el-button slot="reference">Negotiable</el-button>
  </el-popover>
  <br><br>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Product',
      prodData: {
        bedroom: 2,
        bathroom: 2,
        areasqft: 4506,
        price: "$5869,362",
        seller: "Varun Vachhar"
        }
    }
  }
}
</script>

<style>
  .el-card {
    border-radius: 4px;
    margin: 10%;
    margin-top: 0vh;
    padding: 8px;
    padding-right: 8px;
    width: 80%;
    height: auto;
    }

    .prod-header {
        float: left;
        margin: 8px;
    }

    .el-popover {
        margin-top: 8px;
    }

    .prod-icon {
        max-width: 70px;
        max-height: auto;
    }

    .prod-profile {
        max-width: 70px;
        max-height: auto;
        float: left;
    }

    .prod-table {
        width: 100%;
        margin: 10px;
    }

    .prod-stars {
      margin: 5px;
      text-align: left;
    }

    .prod-seller {
      margin: 5px;
      text-align: left;
    }

    .prod-image {
      max-width: 60vh;
      height: auto;
      float: none;
    }

.el-table {
    margin-top: 2vh;
    margin-bottom: 2vh;
}
    @media screen and (max-width: 800px) {
    .el-card {
        width: 80%;
    }

    .prod-image {
      max-width: 60%;
    }
    }
</style>
