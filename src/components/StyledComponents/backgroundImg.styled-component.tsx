import styled from "styled-components";

interface IProsBGImage {
    img : string
}

export const BackgroundImgMain = styled.section<IProsBGImage>`
    background: url(${p => p.img}) center no-repeat fixed;
    background-size: cover;
    width: 100vw;
    height: 100%;

    position: relative;
`

export const BackgroundImgContentFlex = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: auto;
`