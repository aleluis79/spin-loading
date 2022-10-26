# Webcomponent para mostrar un spin loading

#### Se pueden customizar las siguientes variables de estilo:
    --tamanio: 80px;
    --grosor: 10px;
    --color: violet;
    --color-base: #ddd;
    --velocidad: .5s;

Para visualizar el componente se le tiene que pasar el atributo visible en true.

#### Para visualizar:
    document.querySelector('spin-loading').setAttribute("visible", true);  

#### Para ocultar:
    document.querySelector('spin-loading').setAttribute("visible", false);  