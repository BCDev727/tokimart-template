import {useEffect} from 'react'
import { NavLink } from "react-router-dom";

import dataHeader from '../../data/data-layout/Header/data-Header.json';

import {handelHumbergerMenu , moveSmooth} from "../../utils/"
import {HeaderLogo} from "../../utils/allImgs"

// import './header.css'

import Preloader from '../../components/Preloader'

const Img = ({img}) => (
  <img src={img} alt="" />
)

const Header = ({Title , addDepartments=false}) => {

  useEffect(() => {
      handelHumbergerMenu()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])


  return (
    <>
      <Preloader Title={Title} />
      {/* Humberger Begin */}
      <div className="humberger__menu__overlay" />
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#"><Img img={HeaderLogo} /></a>
        </div>
        <nav className="humberger__menu__nav mobile-menu slicknav_nav slicknav_hidden">
          <ul>
            <li><a className="dropdown-toggle" href="#" id="navbardrop1" data-toggle="dropdown">{dataHeader[0].dropdownHumbTit}</a>
              <div className="header__menu__dropdown dropdown-menu">
                {dataHeader[0].dropdownHumbMenuHome && dataHeader[0].dropdownHumbMenuHome.map((item , key) => (
                    <li className="slicknav_collapsed slicknav_parent" key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                ))}
              </div>
            </li>
            {dataHeader[0].dropdownHumbNav && dataHeader[0].dropdownHumbNav.map((item , key) => (
                <li className="slicknav_collapsed slicknav_parent" key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
            ))}
            <li><a className="dropdown-toggle" href="#" id="navbardrop2" data-toggle="dropdown">{dataHeader[0].dropdownHumbPortTit}</a>
              <div className="header__menu__dropdown dropdown-menu">
                {dataHeader[0].dropdownHumbMenuHPort && dataHeader[0].dropdownHumbMenuHPort.map((item , key) => (
                    <li className="slicknav_collapsed slicknav_parent" key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                ))}
              </div>
            </li>
            <li><a className="dropdown-toggle" href="#" id="navbardrop3" data-toggle="dropdown">{dataHeader[0].header__menuCommunityTit}</a>
              <div className="header__menu__dropdown dropdown-menu">
                {dataHeader[0].header__menuCommunityDown && dataHeader[0].header__menuCommunityDown.map((item , key) => (
                    <li className="slicknav_collapsed slicknav_parent" key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                ))}
              </div>
            </li>
            <li><a className="dropdown-toggle" href="#" id="navbardrop3" data-toggle="dropdown">{dataHeader[0].header__menuPagesTit}</a>
              <div className="header__menu__dropdown dropdown-menu">
                {dataHeader[0].header__menuPagesDown && dataHeader[0].header__menuPagesDown.map((item , key) => (
                    <li className="slicknav_collapsed slicknav_parent" key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                ))}
              </div>
            </li>
            <li><NavLink to={dataHeader[0].ContactPath}>{dataHeader[0].ContactCont}</NavLink></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap" />
        <div className="header__top__right__social">
          {dataHeader[0].header__top__right__social.map((item , key) => (
              <a key={key} href="#"><i className={item.name} /></a>
          ))}
        </div>
      </div>
      {/* Humberger End */}
      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope" /> {dataHeader[0].header__top__leftMail}</li>
                    <li>{dataHeader[0].header__top__leftTit}</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    {dataHeader[0].header__top__right__social.map((item , key) => (
                        <a key={key} href="#"><i className={item.name} /></a>
                    ))}
                  </div>
                  <div className="header__top__right__language">
                    <div>{dataHeader[0].header__top__right__lang}</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      {dataHeader[0].arrow_carrot_down.map((item , key) => (
                         <li key={key}><a href="#">{item.name}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#"><i className="fa fa-user" /> {dataHeader[0].login}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="#"><Img img={HeaderLogo} /></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9">
              <nav className="header__menu">
                <ul>
                  <li><a href="#">{dataHeader[0].header__menuHomeTit}</a>
                    <ul className="header__menu__dropdown">
                      {dataHeader[0].header__menuHomeDown && dataHeader[0].header__menuHomeDown.map((item , key) => (
                          <li key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                      ))}
                    </ul>
                  </li>
                  <li><a href="#">{dataHeader[0].header__menuDicoverTit}</a>
                    <ul className="header__menu__dropdown">
                      {dataHeader[0].header__menuDicoverDown && dataHeader[0].header__menuDicoverDown.map((item , key) => (
                          <li key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                      ))}
                    </ul>
                  </li>
                  <li><NavLink to={dataHeader[0].ActivityPath}>{dataHeader[0].ActivityCont}</NavLink></li>
                  <li><a href="#">{dataHeader[0].header__menuCommunityTit}</a>
                    <ul className="header__menu__dropdown">
                      {dataHeader[0].header__menuCommunityDown && dataHeader[0].header__menuCommunityDown.map((item , key) => (
                          <li key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                      ))}
                    </ul>
                  </li>
                  <li><a href="#">{dataHeader[0].header__menuPagesTit}</a>
                    <ul className="header__menu__dropdown">
                      {dataHeader[0].header__menuPagesDown && dataHeader[0].header__menuPagesDown.map((item , key) => (
                          <li key={key}><NavLink to={item.path}>{item.name}</NavLink></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li><a href="/shop-grid"><i className="fa fa-heart" /> <span>1</span></a></li>
                  <li><a href="/shop-grid"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                </ul>
                <div className="header__cart__price">item: <span>{dataHeader[0].header__cart__price}</span></div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
      {/* Header Section End */}
      {addDepartments && (
        <section className="hero hero-normal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars" />
                    <span className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">{dataHeader[0].AllDepartments}</span>
                    <div className="dropdown-menu">
                      {dataHeader[0].AllDepartmentsDropdown.map((item , key) => (
                        <li key={key} className="dropdown-item"><a href={item.path}>{item.name}</a></li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <form action="#">
                      <input type="text" placeholder="Search Digital Assets" />
                      <button type="submit" className="site-btn">{dataHeader[0].hero__searchTit}</button>
                    </form>
                  </div>
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="hero__search__phone__text">
                      <h5> {dataHeader[0].mail}</h5>
                      <span>{dataHeader[0].support}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Header;