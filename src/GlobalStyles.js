import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --head-font: "Bellefair", serif;
    --content-font: "Barlow Condensed", sans-serif;
    --black: #0b0d17;
    --lilac: #d0d6f9;
    --white: #fff;
    --grey: #808080;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--content-font);
    overflow: hidden;
    scroll-behavior: smooth;

}

#main{
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
}

h1,
h2,
h3,
h4{
    font-family: var(--head-font);
}

.page{
    height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
}

.numbering{
    color: var(--grey);
}

@keyframes fadein {
    from{
        opacity: 0;;
    }
    to{
        opacity: 1;
    }
}

::-webkit-scrollbar {
        width: 0;
}
`;
