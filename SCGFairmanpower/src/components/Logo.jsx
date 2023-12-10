import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="https://salmon-charming-stingray-66.mypinata.cloud/ipfs/QmcFMdb7WMYM8F36VaczFjECoTmuxB5yHPH7q7uY5D75kD?_gl=1*1jnf1sw*_ga*MTE0ODI0Mjc0LjE2OTY4NjQ2MTU.*_ga_5RMPXG14TE*MTcwMjAyMjUyNi41Ni4xLjE3MDIwMjI5NTQuNDkuMC4w" alt="Logo" />
      <h1>Fair Manpower</h1>
    </StyledLogo>
  );
}

export default Logo;
