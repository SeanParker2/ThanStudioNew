import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Store.css';

// 导入商品图片
import store1 from '../assets/images/store.png';
import store2 from '../assets/images/store-2.png';
import store3 from '../assets/images/store-3.png';
import store4 from '../assets/images/store-4.png';
import store5 from '../assets/images/store-5.png';
import store6 from '../assets/images/store-6.png';
import store7 from '../assets/images/store-7.png';
import store8 from '../assets/images/store-8.png';

// 导入图标
import iconAll from '../assets/logo/icon-all.png';
import iconHot from '../assets/logo/icon-hot.png';
import iconNew from '../assets/logo/icon-new.png';
import iconSearch from '../assets/logo/icon-search.png';
import iconCart from '../assets/logo/icon-cart.png';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

const products: Product[] = [
  { id: 1, image: store1, title: "商品1", price: "¥99" },
  { id: 2, image: store2, title: "商品2", price: "¥199" },
  { id: 3, image: store3, title: "商品3", price: "¥299" },
  { id: 4, image: store4, title: "商品4", price: "¥399" },
  { id: 5, image: store5, title: "商品5", price: "¥499" },
  { id: 6, image: store6, title: "商品6", price: "¥599" },
  { id: 7, image: store7, title: "商品7", price: "¥699" },
  { id: 8, image: store8, title: "商品8", price: "¥799" },
];

const Store: React.FC = () => {
  return (
    <div className="store-container">
      <Header />
      <div className="store-content">
        <nav className="store-nav">
          <div className="nav-item">
            <img src={iconAll} alt="全部商品" />
            <span>全部商品</span>
          </div>
          <div className="nav-item">
            <img src={iconHot} alt="热门商品" />
            <span>热门商品</span>
          </div>
          <div className="nav-item">
            <img src={iconNew} alt="新品上市" />
            <span>新品上市</span>
          </div>
          <div className="nav-item">
            <img src={iconSearch} alt="搜索" />
            <span>搜索</span>
          </div>
        </nav>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">
                  <span>{product.price}</span>
                  <img src={iconCart} alt="加入购物车" className="cart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;