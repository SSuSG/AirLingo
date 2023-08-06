import PropTypes from "prop-types";
import styled from "@emotion/styled";
import theme from "@/assets/styles/Theme";
import combineShape from "@/utils/style";

// ----------------------------------------------------------------------------------------------------

const { primary4, primary7, warning } = theme.colors;
const shapeStyle = {
    positive: `
        background-color: ${primary4};
        border: none;
        color: #FFFFFF;
        &:hover {
            background-color: ${primary7};
            transition: ease-out 0.35s;
        }
    `,
    negative: `
        background-color: #FFFFFF;
        border: 3px solid ${primary4};
        color: ${primary4};
        &:hover {
            background-color: ${primary4};
            color: #FFFFFF;
            transition: ease-out 0.35s;
        }
    `,
    warning: `
        background-color: ${warning};
        border: none;
        color: #FFFFFF;
        &:hover {
            background-color: #000000;
            transition: ease-out 0.35s;
        }
    `,
    large: ` 
        min-width : 200px;
    `,
    signup: `
    min-width : 200px;
    border-radius:10px;
    `,
    word: `
    min-width : 120px;
    border-radius:10px;
    `,

    prev: `
    width: 25px;
    height: 25px;
    border-radius:10px;
    `,
    normal: `
        min-width: 150px;
        border-radius: 10px;
    `,
    curved: `
        min-width: 150px;
        border-radius: 20px;
    `,
    rounded: `
        min-width: 100px;
        border-radius: 25px;
    `,
    home: `
        min-width: 350px;
        border-radius: 10px;
        height: 65px;
        padding: 10px 20px;
        color: #FFF;
        font-size: 30px;
        font-weight: 700;
        line-height: normal;
    `,
    login: `
    background-color:#FFF;
    align-items: center;
    width: 300px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 10px;
    margin-top: 15px; 
    `,
    googleLogin: `
    background-color:#FFF;
    align-items: center;
    width: 450px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 10px;
    `,
};

// ----------------------------------------------------------------------------------------------------

function TextButton({ type, text, onClick, shape }) {
    return (
        <TextButtonWrapper type={type} onClick={onClick} shape={shape}>
            {text}
        </TextButtonWrapper>
    );
}

TextButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    shape: PropTypes.string,
};

TextButton.defaultProps = {
    type: "button",
    onClick: () => {},
    shape: "positive-rounded",
};

const TextButtonWrapper = styled.button`
    height: 50px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    ${(props) => combineShape(shapeStyle, props.shape)}
`;

// ----------------------------------------------------------------------------------------------------

export default TextButton;
