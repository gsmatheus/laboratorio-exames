'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">laboratorio-exames documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriaModule.html" data-type="entity-link" >CategoriaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' : 'data-target="#xs-controllers-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' :
                                            'id="xs-controllers-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' : 'data-target="#xs-injectables-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' :
                                        'id="xs-injectables-links-module-CategoriaModule-900381373bfd06b7ea86c8ccc1ab57a42b7dae236b7bd4f61ccc66bf3d83cb8456cd9c2661c622cc68ea55953b878c6cb70b17240bd1729abffdc1adcfc41c83"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PessoaModule.html" data-type="entity-link" >PessoaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' : 'data-target="#xs-controllers-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' :
                                            'id="xs-controllers-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' }>
                                            <li class="link">
                                                <a href="controllers/PessoaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PessoaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' : 'data-target="#xs-injectables-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' :
                                        'id="xs-injectables-links-module-PessoaModule-707a70713cbb712596962e6133dd0fa2501019f9f3ad8c5c5139a88dc28b4d62ebfa25cc478f7a24d669dea236d2d6144e2aa98e2311b8c1169b7e7865ca8da5"' }>
                                        <li class="link">
                                            <a href="injectables/PessoaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PessoaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CategoriaController.html" data-type="entity-link" >CategoriaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PessoaController.html" data-type="entity-link" >PessoaController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Categoria.html" data-type="entity-link" >Categoria</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Pessoa.html" data-type="entity-link" >Pessoa</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Categoria.html" data-type="entity-link" >Categoria</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoriaRepository.html" data-type="entity-link" >CategoriaRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoriaDto.html" data-type="entity-link" >CreateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePessoaDto.html" data-type="entity-link" >CreatePessoaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pessoa.html" data-type="entity-link" >Pessoa</a>
                            </li>
                            <li class="link">
                                <a href="classes/PessoaRepository.html" data-type="entity-link" >PessoaRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReturnCategoriaDto.html" data-type="entity-link" >ReturnCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReturnPessoaDto.html" data-type="entity-link" >ReturnPessoaDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoriaService.html" data-type="entity-link" >CategoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PessoaService.html" data-type="entity-link" >PessoaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});