import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { ConstructionOutlined } from "@material-ui/icons";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
 
      ],
      currentItems: [],
      products: [
        { 
          id: 1,
          title: "ZERENA 1 BTE 105",
          img: "zerena_1_bte_105.jpg",
          description: "ZERENA 1 BTE 105 - мощный аппарат Бернафона, наиболее современный \
           слуховой аппарат для пациентов со средними и тяжелыми потерями слуха.",
          category: "zerena",
          price: "23000"
        },
        { 
          id: 2,
          title: "ZERENA 1 ITE CIC",
          img: "zerena_1_ite_cic.jpg",
          description: "ZERENA 1 ITE CIC - самые маленькие внутриканальные слуховые аппараты \
          из семейства Зерена, которыми может быть проведена коррекция от слабой до тяжелой потерь слуха.",
          category: "zerena",
          price: "34534"
        },
        { 
          id: 3,
          title: "ZERENA 7 ITE IIC",
          img: "zerena_7_ite_iic.jpg",
          description: "ZERENA 7 ITE IIC - самые маленькие внутриканальные слуховые аппараты из \
          семейства Зерена, которыми может быть проведена коррекция от слабой до тяжелой потерь слуха.",
          category: "zerena",
          price: "103600"
        },
        { 
          id: 4,
          title: "INIZIA 3 N",
          img: "inizia_3_n.jpg",
          description: "Слуховые аппараты Inizia – это великолепный выбор для пациентом \
          со сниженным слухом для шумной и тихой обстановки.",
          category: "inizia",
          price: "34534"
        },
        {
          id: 5,
          title: "INIZIA 3 ITCD",
          img: "inizia_3_itcd.jpg",
          description: "Слуховые аппараты Inizia – это великолепный выбор для пациентом \
          со сниженным слухом для шумной и тихой обстановки.",
          category: "inizia",
          price: "43534"
        },
        {
          id: 6,
          title: "INIZIA 3 CIC",
          img: "inizia_3_cic.jpg",
          description: "Слуховые аппараты Inizia – это великолепный выбор для пациентом \
          со сниженным слухом для шумной и тихой обстановки.",
          category: "inizia",
          price: "53534"
        },
        {
          id: 7,
          title: "VIRON 1 BTE 105",
          img: "viron_1_bte_105.jpg",
          description: "VIRON 1 BTE 105 - аппарат сделан для потерь слуха от слабых до тяжелых.",
          category: "viron",
          price: "37300"
        },                   
        {
          id: 8,
          title: "VIRON 1 miniRITE",
          img: "viron_1_miniRITE.jpg",
          description: "VIRON 1 miniRITE - первый аппарат Бернафона с True Environment Processing™. \
          MiniRite - аппарат с телефоном-в-ухе, сделан для потерь слуха от слабых до тяжелых.",
          category: "viron",
          price: "34534"
        },
        {
          id: 9,
          title: "VIRON 9 miniRITE T R",
          img: "viron_1_miniRITE_T_R.jpg",
          description: "VIRON 9 miniRITE T R - первый аппарат Бернафона с True Environment Processing™. \
          MiniRite TR - перезаряжающийся слуховой аппарат с эффективным Li-ion аккумулятором, для работы \
          в течение целого дня, используя активно при этом и беспроводную связь.",
          category: "viron",
          price: "36900"
        },       
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.products;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className = "wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Products onShowItem={this.onShowItem} products = {this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem  item={this.state.fullItem}
          onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item});
    this.setState({ showFullItem: !this.state.showFullItem});
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.products});
      return; 
    }

    this.setState({
      currentItems: this.state.products.filter(el => el.category === category)
    });
  }

  productExist(array, id){
    let exist = false;

    array.forEach(item => {
      console.log(item.id);
      if (item.id === id){
        exist = true;
      }
    })

    return exist;
  }

  addToOrder(product) {
    if (!this.productExist(this.state.orders, product.id))
      this.setState({orders: [...this.state.orders, product]} );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
}

export default App;
