import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root {
      --clean-white-color: #FFFFFF;
      --white-color: #E5E5E5;
      --light-color: #F4FCFF;
      --primary-color: #007E9B;
      --secondary-color: #3092AD;
      --text-color: #064556;
    }
`;
