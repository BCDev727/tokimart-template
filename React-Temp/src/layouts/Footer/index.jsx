import dataFooter from '../../data/data-layout/Footer/data-Footer.json'

import {FooterLogo} from '../../utils/allImgs'

const Footer = ({Copyright=false , CopyrightTex="All rights reserved | This template is made with"}) => {

    return (

      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="/"><img src={FooterLogo} alt="" /></a>
                </div>
                <ul>
                  <li>{dataFooter[0].Address}</li>
                  <li>{dataFooter[0].Phone}</li>
                  <li>{dataFooter[0].Email}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>{dataFooter[0].UsefulLinksTit}</h6>
                <ul>
                  {dataFooter[0].UsefulLinksUp.map((item , key) => (
                     <li key={key}><a href={item.path}>{item.name}</a></li>
                  ))}
                </ul>
                <ul>
                  {dataFooter[0].UsefulLinksDown.map((item , key) => (
                     <li key={key}><a href={item.path}>{item.name}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>{dataFooter[0].footer__widgetTit}</h6>
                <p>{dataFooter[0].footer__widgetTex}</p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">{dataFooter[0].Subscribe}</button>
                </form>
                <div className="footer__widget__social">
                  {dataFooter[0].footerSocial.map((item , key) => (
                     <a key={key} href="#"><i className={item.name} /></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {Copyright && (
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__copyright">
                  <div className="footer__copyright__text">
                    <p>
                      Copyright © {new Date().getFullYear()} {CopyrightTex}
                      {!CopyrightTex && (
                        <>
                          <i className="fa fa-heart" aria-hidden="true" />
                          by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="footer__copyright__payment"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>
    )
}

export default Footer