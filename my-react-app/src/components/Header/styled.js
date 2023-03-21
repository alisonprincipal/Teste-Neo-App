import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100%;
    min-height: 80px;

    display: flex;
    justify-content: center;
    
    padding:10px;

    background-color: var(--color-grey-1);

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div{
        width: 100%;
        max-width: 1200px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:center;

        gap: 20px;

        div{
            justify-content: space-evenly;
            max-width: 700px;
            padding: 10px;
            
            figcaption{
                width: 50px;
                height: 50px;

                display: flex;
                align-items: center;
                justify-content: center;

                position: relative;
                cursor: pointer;
                

                span{
                    font-weight: bold;
                    font-size: 25px;
                    position: absolute;
                    top:0px;
                    right:15px;
                    color: red;
                }
            }
        }
    }
    h3{
        font-size: 25px;
        color: black;
        box-shadow: 0px 1px 1px red;
        padding: 5px;

      strong{
        font-size: 40px;
        color: red;
      }  
    }
    h2{ 
        font-size: 30px;
        strong{
        font-size: 30px;
        color: red;
      } 
    }

    @media (max-width: 928px) {
      div{
        justify-content: center;

        div{
            justify-content: center;
            align-items: center;
            text-align: center;
        }
      }
    }
    
`