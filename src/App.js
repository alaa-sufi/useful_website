import React, { useState } from "react";
import "./style.scss";

export default function App() {
  const showMore = (e) => {
    e.target.parentElement.style.overflow = "scroll";
    e.target.parentElement.childNodes.forEach((x) =>
      x.classList.remove("d-none")
    );
    e.target.classList.add("d-none");
  };
  const showLess = (e) => {
    e.target.parentElement.style.overflow = "hidden";
    e.target.parentElement.childNodes.forEach(
      (x, i) => i > 4 && x.classList.add("d-none")
    );
    e.target.classList.add("d-none");
    e.target.previousSibling.classList.remove("d-none");
    // //scroll top
    // $(this).parent(".group").scrollTop($(this).offset().top);
  };
  const [links, setLinks] = useState([
    {
      title: "tailwindcss",
      icon: "fas fa-wind",
      list: [
        { title: "playground", link: "https://play.tailwindcss.com/" },
        { title: "classes", link: "https://tailwind.build/classes" },
        {
          title: "cheatsheet 2.1.0",
          link: "https://tailwindcomponents.com/cheatsheet/"
        },
        {
          title: "colors",
          link: "https://tailwindcss.com/docs/customizing-colors"
        },
        {
          title: "gradient-generator",
          link: "https://tailwindcomponents.com/gradient-generator/"
        },

        {
          modalTitle: "components",
          id: "tailwind-component-links",
          modalBody: `<ul style="height:initial">
        <li><a className="d-block fw-bold" target="_blank" href="https://www.tailwind-kit.com/components">Tail Kit -- 250 components <span className="tag">html</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://mambaui.com/components">Mambaui -- 140 components <span className="tag">html</span><span className="tag">vue</span><span className="tag">jsx</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://www.gustui.com/docs/application/components/alerts">Gustui -- 50 components <span className="tag">html</span><span className="tag">react</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://kimia-ui.vercel.app/components/accordion">kimia-ui -- simple <span className="tag">react</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://merakiui.com/components/">merakiui -- beautiful<span className="tag">html</span><span className="tag">rtl/ltr</span><span className="tag">dark</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://kitwind.io/products/kometa/components">kitwind -- 130 sections <span className="tag">html</span><span className="tag">vue/ltr</span><span className="tag">react</span></a></li>
        <hr/>
        <h6 className="fw-bold">Other library based</h6>
        <li><a className="d-block fw-bold" target="_blank" href="https://merakiui.com/components/">Material Tailwind -- beautiful and big<span className="tag">react</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://www.vue-tailwind.com/">vue-tailwind -- <span className="tag">vue</span></a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://daisyui.com/components/button/">daisyui -- <span className="tag">html</span></a></li>
      </ul>`
        },
        {
          modalTitle: "templates",
          id: "tailwind-templates-links",
          modalBody: `<ul style="height:initial">
        <li><a className="d-block fw-bold" target="_blank" href="https://www.tailwind-kit.com/components">Tail Kit -- Dashboards/Landing pages/Errors pages</a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://mambaui.com/components">Mambaui -- Business/Portfolio</a></li>
        <li><a className="d-block fw-bold" target="_blank" href="https://www.gustui.com/docs/application/components/alerts">Gustui -- Accounts/Dashboards/Onboarding/Other</li>
        <hr/>
        <h6 className="fw-bold">Other library based</h6>
        <li><a className="d-block fw-bold" target="_blank" href="https://merakiui.com/components/">Material Tailwind -- Landing Profile/Login/Register/Dashboard</a></li>
      </ul>`
        }
      ]
    },
    // {
    //   title: "file",
    //   icon: "fa fa-file",
    //   list: [
    //     { title: "upload img", link: "https://alaa-sufi.imgbb.com/" },
    //     { title: "upload file", link: "https://gofile.io/" }
    //   ]
    // },
    {
      title: "choose",
      icon: "fas fa-hand-pointer",
      list: [
        { title: "hamburgers", link: "https://jonsuh.com/hamburgers/" },
        { title: "simple use svg icon", link: "https://heroicons.com/" },
        { title: "animation icon", link: "https://lordicon.com/" },
        { title: "hover", link: "https://ianlunn.github.io/Hover/" },
        {
          title: "loading spinner",
          list: [
            {
              title: "codepen",
              link: "https://codepen.io/alaa-sufi/pen/MWbYdeb"
            },
            { title: "website", link: "https://whirl.netlify.app/" }
          ]
        },
        {
          title: "buttons/toggle/checkbox",
          link: "https://cssbuttons.io/buttons"
        }
      ]
    },
    {
      title: "react",
      icon: "fab fa-react",
      list: [
        { title: "example", link: "https://reactjsexample.com" },
        { title: "made with react", link: "https://madewithreactjs.com/" },
        { title: "best of", link: "https://bestofreactjs/" },
        { title: "icons", link: "https://react-icons.github.io/react-icons" },
        {
          title: "ui1",
          list: [
            {
              title: "material ui",
              link: "https://mui.com/getting-started/learn/"
            },
            {
              title: "rsuite",
              link: "https://rsuitejs.com/components/overview/"
            }
          ]
        },
        {
          title: "ui2",
          list: [
            {
              title: "react-bootstrap",
              link: "https://react-bootstrap.github.io/"
            },
            {
              title: "chakra",
              link: "https://chakra-ui.com/"
            }
          ]
        },

        {
          title: "slider",
          list: [
            {
              title: "slick",
              link: "http://kenwheeler.github.io/slick/"
            },
            {
              title: "react-flickity",
              link: "https://www.npmjs.com/package/react-flickity-component"
            }
          ]
        },
        {
          title: "laravel with react",
          link:
            "https://blog.devgenius.io/laravel-7-x-p1-installation-with-react-and-react-router-7713f4748b6f"
        },
        {
          title: "fromik",
          link: "https://formik.org/docs/overview"
        },
        {
          title: "text editor",
          link: "https://docs.slatejs.org/libraries/slate-react"
        },
        { title: "translate i18next", link: "https://react.i18next.com/" },
        { title: "auto translate", link: " " },
        {
          title: "animation1",
          list: [
            {
              title: "transition-group",
              link: "https://reactcommunity.org/react-transition-group/"
            },
            {
              title: "motion",
              link: "https://github.com/chenglou/react-motion"
            }
          ]
        },
        {
          title: "animation2",
          list: [
            {
              title: "move(map)",
              link: "https://react-move-docs.netlify.app"
            },
            {
              title: "router transition",
              link: "http://maisano.github.io/react-router-transition/"
            }
          ]
        }
      ]
    },
    {
      title: "vue",
      icon: "fab fa-vuejs",
      list: [
        { title: "Example", link: "https://vuejsexamples.com/" },
        {
          title: "vuetify",
          link: "https://vuetifyjs.com/en/getting-started/installation/"
        },
        {
          modalTitle: "VS commend",
          id: "vs-vue",
          modalBody: `<ul style="height:initial">
        <li><strong> install cli first time</strong> npm install -g @vue/cli </li>
        <li><strong>creat </strong> vue create my-project </li>
        <li><strong>run </strong> npm run serve </li>
        <li><strong>install vue-router </strong> npm install vue-router@4</li>
      </ul>`
        }
      ]
    },
    {
      title: "codesandbox",
      icon: "fas fa-laptop-code",
      list: [
        {
          modalTitle: "open github in codesandbox",
          id: "codesandbox",
          modalBody: ` <ul>
        <li>
     <strong>form : </strong> https://github.com/etc.
        </li>
        <li>
          <strong>to : </strong>  https://github<span className="text-danger">box</span>.com/etc
        </li>
      </ul>`
        },
        {
          modalTitle: " Import Local projects via CLI",
          id: "codesandbox2",
          modalBody: ` <ul>
          <h6 className="fw-bold">in commend line</h6>
            <li>
         <strong>install glaobaly : </strong> npm install -g codesandbox
            </li>
            <li>
              <strong>open in codesandbox </strong>  codesandbox ./
            </li>
          </ul>`
        }
      ]
    },
    {
      title: "css",
      icon: "fab fa-css3-alt",
      list: [
        {
          title: "generate",
          list: [
            { title: "waves", link: "https://getwaves.io/" },
            { title: "clip-path", link: "https://bennettfeely.com/clippy/" }
          ]
        },
        {
          title: "generate animation",
          list: [
            { title: "all", link: "https://animista.net" },
            { title: "text", link: "http://cssanimation.io/index.html" }
          ]
        },
        {
          title: "gui generator css",
          list: [
            { title: "proprties", link: "https://cssgenerator.org" },
            { title: "studio", link: "https://enjoycss.com/" }
          ]
        },
        { title: "sprite images", link: "https://css.spritegen.com" },
        {
          title: "border-radius",
          link: "https://9elements.github.io/fancy-border-radius/"
        },
        { title: "css-layout", link: "https://csslayout.io/" },
        { title: "div-table", link: "https://divtable.com/generator/" },
        {
          title: "MoreToggles",
          link: "https://jnkkkk.github.io/MoreToggles.css/allToggles.html"
        }
      ]
    },
    {
      title: "template",
      icon: "fab fa-bootstrap",
      list: [
        { title: "bnker", link: "https://bnker.netlify.app/" },
        {
          title: "foodka(from pc)",
          link:
            "https://themeforest.net/item/foodka-restaurant-food-ordering-delivery-html-template/33165530?_ga=2.50825705.1122537538.1641056576-1469307516.1641056576"
        },
        { title: "html", link: "https://colorlib.com" }
      ]
    },
    {
      title: "classes",
      icon: "fa fa-question-circle",
      list: [
        {
          title: "fontawesome",
          list: [
            {
              title: "5",
              link:
                "https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
            },
            {
              title: "4.7",
              link:
                "https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-4x/"
            }
          ]
        },
        {
          title: "bootstrap",
          list: [
            {
              title: "4",
              link:
                "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
            },
            {
              title: "3",
              link:
                "https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp"
            },
            {
              title: "5",
              link: "https://bootstrap-cheatsheet.themeselection.com/index.html"
            }
          ]
        }
      ]
    },
    {
      title: "svg",
      icon: "fas fa-shapes",
      list: [
        { title: "png to svg", link: "https://www.pngtosvg.com/" },
        {
          title: "svg person",
          list: [
            { title: "search", link: "https://freewebillustrations.com" },
            { title: "1", link: "https://undraw.co/illustrations" },
            { title: "2", link: "https://www.manypixels.co/gallery" },
            { title: "3", link: "https://delesign.com/free-designs/graphics/" }
          ]
        },
        {
          title: "svg animate line draw",
          link: "https://svgartista.net/?referrer=animista"
        },
        { title: "svg animation", link: "https://lottiefiles.com" },
        { title: "svg app", link: "https://vectr.com/new" }
      ]
    },
    {
      title: "icons",
      icon: "fas fa-icons",
      list: [
        { title: "EPS AI", link: "https://www.graphberry.com/category/icons" },
        { title: "SVG PNG", link: "https://www.graphberry.com/category/icons" },
        { title: "SVG", link: "https://www.svgrepo.com/" },
        {
          title: "SVG EPS PNG PSD",
          list: [
            { title: "1", link: "https://www.flaticon.com/" },
            { title: "2", link: "https://graphicburger.com/icons-set/" }
          ]
        },
        { title: "PNG", link: "https://www.iconfinder.com/" },
        { title: "unicode-table", link: "https://unicode-table.com/en/" },
        { title: "emojipedia", link: "https://emojipedia.org/" },
        { title: "gradient", link: "https://www.iconshock.com/svg-icons/#_=_" }
      ]
    },
    {
      title: "last",
      icon: "fas fa-walking",
      list: [
        { title: "favicon", link: "https://realfavicongenerator.net/" },
        { title: "image compressor", link: "https://imagecompressor.com/" },
        { title: "best compressor", link: "https://www.compress2go.com//" },
        { title: "validator", link: "https://validator.w3.org/" },
        { title: "head meta", link: "https://www.heymeta.com" },
        { title: "free host", link: "https://www.netlify.com/" },
        {
          title: "tester screen remember reload page",
          link: "https://responsivedesignchecker.com"
        },
        { title: "tester screens", link: "https://everysize-app.kibalabs.com" },
        { title: "tester seo", link: "https://www.seobility.net/en/seocheck/" },
        { title: "web Measure", link: "https://web.dev/measure/" },
        {
          modalTitle: "img sizes",
          id: "img-sizes",
          modalBody: `<ul>
          <li>1024*512</li>
          <li>800*1200</li>
          <li>1200*630</li>
          <li>180*110</li>
          <li>736*1128</li>
          <li><a href="https://github.com/alaa-sufi/MyPortfolio/blob/main/index.html">git hub link</a></li>
          </ul>`
        }
      ]
    },
    {
      title: "mockup",
      icon: "fas fa-laptop",
      list: [
        {
          title: "from link",
          link: "http://techsini.com/multi-mockup/index.php"
        },
        {
          title: "from img",
          list: [
            {
              title: "1",
              link: "https://mockupbro.com/mockup/flat-devices-mockup"
            },
            { title: "2", link: "https://mockuper.net/mockups/display" },
            { title: "from psd", link: "https://mockupbro.com/" }
          ]
        }
      ]
    },
    {
      title: "edit img",
      icon: "fas fa-file-image",
      list: [
        { title: "photopea", link: "https://www.photopea.com" },
        { title: " canva", link: "https://www.canva.com/" }
      ]
    },
    {
      title: "library",
      icon: "fas fa-file-import",
      list: [
        {
          title: " flickity , groupCells :100%",
          link: "https://flickity.metafizzy.co/"
        },
        { title: "wowjs", link: "https://wowjs.uk/" },
        { title: "nicescroll", link: "https://nicescroll.areaaperta.com/" },
        { title: "shuffle", link: "https://www.kunkalabs.com/mixitup/" },
        { title: "fit text", link: "http://fittextjs.com/" },
        { title: "flagpedia", link: "https://flagpedia.net/download/api" },
        {
          title: "multiselect with search",
          list: [
            { title: "web", link: "https://select2.org/" },
            {
              title: "codepen",
              link: "https://codepen.io/alaa-sufi/pen/xxrKJmm"
            }
          ]
        },
        {
          title: "js & CSS Libraries",
          link: "https://www.cssscript.com/tag/time-picker/"
        },
        { title: "darkmode", link: "https://darkmodejs" },
        {
          title: "file-upload-with-preview",
          link: "https://github.com/johndatserakis/file-upload-with-preview"
        },
        {
          title: "bootstrap-datepicker",
          link:
            "https://bootstrap-datepicker.readthedocs.io/en/latest/index.html"
        }
      ]
    },
    {
      title: "colors",
      icon: "fa fa-palette",
      list: [
        { title: "palettes", link: "https://colorhunt.co" },
        {
          title: "circle wheel",
          link: "https://color.adobe.com/create/color-wheel"
        },
        { title: "explore", link: "https://color.adobe.com/explore" },
        {
          title: "contrast checker",
          link: "https://coolors.co/contrast-checker/112a46-acc8e5"
        },
        { title: "gradient", link: "https://cssgradient.io/" },
        {
          title: "from img",
          list: [
            { title: "coolers", link: "https://coolors.co/image-picker" },
            { title: "adobe", link: "https://color.adobe.com/create/image" }
          ]
        }
      ]
    },
    {
      title: "reference",
      icon: "fa fa-asterisk",
      list: [
        { title: "html", link: "https://htmlreference.io/" },
        { title: "css", link: "https://cssreference.io/" },
        { title: "roadmap", link: "https://roadmap.sh/frontend" },
        { title: "cheatsheet all", link: "https://htmlcheatsheet.com/" }
      ]
    },
    {
      title: "varios",
      icon: "fas fa-brain",
      list: [
        { title: "convert img2txt", link: "https://ocr.space/" },
        { title: "blog for all", link: "https://bashooka.com" },
        { title: "img placeholder", link: "http://placehold.jp/en.html" }
      ]
    },
    {
      title: "theme",
      icon: "fab fa-wordpress",
      list: [{ title: "wocommerce hiteck", link: "" }]
    },
    {
      title: "php",
      icon: "fab fa-php",
      list: [
        {
          modalTitle: "VS commend",
          id: "vs-php",
          modalBody: `<h5>from folder</h5>
          <ul style="height:initial" className="mb-3">
          <li>php artisan config:clear</li>
          <li> php artisan cache:clear </li>
          <li>Php artisan mi:f --seed</li>
          <li>php artisan serve</li>
          </ul>
          <h5>from gitlab</h5>
          <ul style="height:initial" className="mb-3">
          <li>copy .env.example to .env</li>
          <li>install vender:composer update</li>
          <li>install vender if has error:composer install --ignore-platform-reqs</li>
          <li>php artisan config:clear</li>          
          <li> php artisan cache:clear </li>
          <li>Php artisan mi:f --seed</li>
          <li>php artisan serve</li>
        </ul>`
        }
      ]
    },
    {
      title: "learn",
      icon: "fas fa-graduation-cap",
      list: [{ title: "daily css", link: "https://100dayscss.com/" }],
      list: [{ title: "css battle", link: "https://cssbattle.dev/" }],
      list: [{ title: "coderhub", link: "https://coderhub.sa/home" }],
      list: [{ title: "javascript30", link: "https://javascript30.com/" }],
      list: [{ title: "elzero website", link: "https://elzero.org/" }]
    }
  ]);

  return (
    <div className="content">
      <h1>Useful Websites</h1>
      <div className="container">
        {/* <div className="row">
          {links.map((link, index) => (
            <div className="col-lg-4 col-md-6 group" key={index}>
              <ul>
                <h2>
                  {link.title} <i className={link.icon}></i>
                </h2>
                {link.list &&
                  link.list.map((li, i) => (
                    <>
                      <li
                        key={`${index}-${i}`}
                        className={i > "4" ? "d-none" : undefined}
                      >
                        {li.title && (
                          <>
                            <a target="_blank" rel="noreferrer" href={li.link}>
                              {li.title}
                            </a>
                            {li.list &&
                              li.list.map((l, ii) => (
                                <span
                                  className="item"
                                  key={`${index}-${i}-${ii}`}
                                >
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={l.link}
                                  >
                                    {l.title}
                                  </a>
                                </span>
                              ))}
                          </>
                          //   }
                        )}
                        {li.modalTitle && (
                          <>
                            <button
                              type="button"
                              className="btn"
                              data-toggle="modal"
                              data-target={`#${li.id}`}
                            >
                              {" "}
                              {li.modalTitle}{" "}
                            </button>
                            <div
                              className="modal fade"
                              id={li.id}
                              tabIndex={-1}
                              aria-labelledby="vs"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div
                                    className="modal-body"
                                    dangerouslySetInnerHTML={{
                                      __html: li.modalBody
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </li>
                      {i === link.list.length - 1 && i > 5 && (
                        <>
                          <button
                            className="more"
                            onClick={(event) => {
                              showMore(event);
                            }}
                          >
                            show more
                          </button>
                          <button
                            className="less d-none"
                            onClick={(event) => {
                              showLess(event);
                            }}
                          >
                            show less
                          </button>
                        </>
                      )}
                    </>
                  ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
