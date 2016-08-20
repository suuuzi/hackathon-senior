angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("modules/sampleModule/views/dashboard.html","<div class=\"page-container\" ng-controller=\"templateCtrl\">\r\n    <div class=\"page-content-wrapper\">\r\n        <!-- uiView:  -->\r\n        <div class=\"page-content ng-scope\" ui-view=\"\">\r\n            <div id=\"page-head\" class=\"page-head ng-scope\">\r\n                <div class=\"page-title\">\r\n                    <h1 class=\"text-uppercase\">{{pagetitle}}</h1>\r\n                </div>\r\n                <div class=\"page-toolbar\">\r\n\r\n                    <!-- BEGIN THEME PANEL -->\r\n                    <div class=\"btn-group btn-theme-panel\">\r\n                        <a href=\"javascript:;\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                            <i class=\"icon-settings\"></i>\r\n                        </a>\r\n\r\n                        <div class=\"dropdown-menu theme-panel pull-right dropdown-custom hold-on-click\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                                    <h3>ISTO É APENAS UM MODELO</h3>\r\n                                    <h4>O ícone de configuração deverá abrir a tela de configuração e não um dropdown</h4>\r\n                                    <ul class=\"theme-settings\">\r\n                                        <li> Theme Style\r\n                                            <select class=\"layout-style-option form-control input-small input-sm\">\r\n                                                <option value=\"square\">Square corners</option>\r\n                                                <option value=\"rounded\" selected=\"selected\">Rounded corners</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Layout\r\n                                            <select class=\"layout-option form-control input-small input-sm\">\r\n                                                <option value=\"fluid\" selected=\"selected\">Fluid</option>\r\n                                                <option value=\"boxed\">Boxed</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Header\r\n                                            <select class=\"page-header-option form-control input-small input-sm\">\r\n                                                <option value=\"fixed\" selected=\"selected\">Fixed</option>\r\n                                                <option value=\"default\">Default</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Top Dropdowns\r\n                                            <select class=\"page-header-top-dropdown-style-option form-control input-small input-sm\">\r\n                                                <option value=\"light\">Light</option>\r\n                                                <option value=\"dark\" selected=\"selected\">Dark</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Sidebar Mode\r\n                                            <select class=\"sidebar-option form-control input-small input-sm\">\r\n                                                <option value=\"fixed\">Fixed</option>\r\n                                                <option value=\"default\" selected=\"selected\">Default</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Sidebar Menu\r\n                                            <select class=\"sidebar-menu-option form-control input-small input-sm\">\r\n                                                <option value=\"accordion\" selected=\"selected\">Accordion</option>\r\n                                                <option value=\"hover\">Hover</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Sidebar Position\r\n                                            <select class=\"sidebar-pos-option form-control input-small input-sm\">\r\n                                                <option value=\"left\" selected=\"selected\">Left</option>\r\n                                                <option value=\"right\">Right</option>\r\n                                            </select>\r\n                                        </li>\r\n                                        <li> Footer\r\n                                            <select class=\"page-footer-option form-control input-small input-sm\">\r\n                                                <option value=\"fixed\">Fixed</option>\r\n                                                <option value=\"default\" selected=\"selected\">Default</option>\r\n                                            </select>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END THEME PANEL -->\r\n                </div>\r\n            </div>\r\n            <ul class=\"page-breadcrumb breadcrumb\">\r\n                <li>\r\n                    <a href=\"index.html\">Home</a>\r\n                    <i class=\"fa fa-circle\"></i>\r\n                </li>\r\n                <li>\r\n                    <span class=\"active\">{{stockMonitor}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"col-sm-9 col-md-9\" style=\"padding-left: 0px;\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"portlet light bordered\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <span class=\"caption-subject font-green font-dark bold uppercase ng-binding\">COREREDOR 1</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"just_for_frontify just_for_frontify_300\">\r\n                                    <!-- <span class=\"just_for_frontify_middle\">Conteúdo</span> -->\r\n                                    <img src=\"https://terretrails.files.wordpress.com/2010/01/img_1947.jpg\" style=\"width: 411; height: 350;\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"portlet light bordered\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <span class=\"caption-subject font-green font-dark bold uppercase ng-binding\">CAMERA 2</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"well just_for_frontify just_for_frontify_300\">\r\n                                    <span class=\"just_for_frontify_middle\">Conteúdo</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"portlet light bordered\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <span class=\"caption-subject font-green font-dark bold uppercase ng-binding\">CAMERA 3</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"well just_for_frontify just_for_frontify_300\">\r\n                                    <span class=\"just_for_frontify_middle\">Conteúdo</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"portlet light bordered\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <span class=\"caption-subject font-green font-dark bold uppercase ng-binding\">CAMERA 4</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"well just_for_frontify just_for_frontify_300\">\r\n                                    <span class=\"just_for_frontify_middle\">Conteúdo</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <span class=\"caption-subject font-green font-dark bold uppercase ng-binding\">NOTIFICAÇÕES</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"portlet-body\" ng-repeat=\"n in notificacoes\">\r\n                            <div class=\"well just_for_frontify just_for_frontify_150\">\r\n                                <span class=\"just_for_frontify_middle\">{{n.texto}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");}]);