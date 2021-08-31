import './App.css';
import { Button, Small, ThemeProvider, CustomTabs, Pagination, GridItem, GridContainer, Input, Dropdown, DatePicker, Header, Parallax } from '@maikvortx/ui-kit'
import { Text, Title } from './styles'
import GetApp from "@material-ui/icons/GetApp";
import { Favorite, InsertDriveFile, Error, Search } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { Container, InputAdornment } from '@material-ui/core';


const useStyles = makeStyles({
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    fontFamily: "\"Josefin Sans\", \"Times New Roman\", serif"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
});


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider>
        {/* <Header /> */}
        <Parallax image={require("./assets/img/bg4.jpg")}>
          <Container>
            <GridContainer>
              <GridItem>
                <Title>
                  <h1 color={'#cb1e25'}>Vórtx UI Kit.</h1>
                </Title>
                <Title>
                  <h3>get our design system components with npm i @maikvortx/ui-kit</h3>
                </Title>
              </GridItem>
            </GridContainer>
          </Container>
        </Parallax>
        <section>
          <Title>Botões</Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Primário</small></h3>
              </Title>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="contained" color="primary" id="Button">Default</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="contained" color="primary" id="Button" disabled>Disabled</Button>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Secundário</small></h3>
              </Title>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="outlined" color="outlined">
                  Default
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="outlined" color="outlined" disabled>
                  Disabled
                </Button>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Variações de botões</small></h3>
              </Title>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">
                    <GetApp /> Com ícone
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Button color="outlined">
                    <InsertDriveFile /> Download da tabela
                  </Button>
                  <Button color="primary" variant="outlined">
                    Anexar mais arquivos
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Button justIcon round color="primary">
                    <Favorite />
                  </Button>
                  <Button color="primary" simple>
                    simple
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Tamanho</small></h3>
              </Title>
              <GridContainer justify="left">
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary" size="sm">Small</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">Regular</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary" size="lg">Large</Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </section>

        <section>
          <Title>
            <h3>Inputs</h3>
          </Title>
          <Title>
            <h3><small>Formulário</small></h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                id="regular"
                labelText="Regular"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                value="Erro"
                id="error"
                error
                helperText="*Mensagem de erro."
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Error />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                labelText="Desabilitado"
                id="desabilitado"
                disabled
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                placeholder="Pesquisar"
                id="input-pesquisar"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <Title>
            <h3><small>Filtro</small></h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <DatePicker
                id="regular"
                labelText="Regular"
                variant="outlined"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Dropdown
                id="Filtro"
                labelText="Filtro"
                variant="outlined"
                inputProps={{
                  placeholder: "Filtro"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Dropdown
                id="regular"
                labelText="Regular"
                variant="outlined"
                checkbox
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Dropdown
                id="regular"
                labelText="Regular"
                variant="outlined"
                disabled
                inputProps={{
                  placeholder: "Regular"
                }}
                fullWidth
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
        </section>


        <section>
          <Title>Paginação</Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <GridItem xs={12} sm={12} md={6}>
                <Pagination pageCount={7} />
                <Pagination pageCount={20} />
              </GridItem>
            </GridItem>
          </GridContainer>
        </section>


        <section>
          <Title>
            <h3>Abas</h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                plainTabs
                headerColor="#f5f5f5"
                tabs={[
                  {
                    tabName: "Aba 1",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Aba 2",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "Aba 3",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </section>
        <section>
          <Title><h3>Tipografia</h3></Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Title>
                <h3>
                  <span color={"#cb1e25"}>Josefin Sans</span> - Font Family
                  <a href='fonts/josefinsans.zip' download><GetApp /></a>
                </h3>
              </Title>
              <Text width="100">Utilizada em títulos, subtítulos e em botões de maior destaque.</Text>
              <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                  <Title>
                    <h1>H1 -Título</h1>
                    <p>Josefin Sans Regular - 48pt</p>
                  </Title>
                  <Title >
                    <h2>H2 -Título</h2>
                    <p>Josefin Sans Regular - 40pt</p>
                  </Title>
                  <Title>
                    <h3>H3 -Título</h3>
                    <p>Josefin Sans Regular - 32pt</p>
                  </Title>
                  <Title>
                    <h4>H4 -Título</h4>
                    <p>Josefin Sans Regular - 24pt</p>
                  </Title>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <div>
                    <h1 fontWeight={700}>H1 -Título</h1>
                    <p>Josefin Sans Bold - 48pt</p>
                  </div>
                  <div>
                    <h2 fontWeight={700}>H2 -Título</h2>
                    <p>Josefin Sans Bold - 40pt</p>
                  </div>
                  <div>
                    <h3 fontWeight={700}>H3 -Título</h3>
                    <p>Josefin Sans Bold - 32pt</p>
                  </div>
                  <div>
                    <h4 fontWeight={700}>H4 -Título</h4>
                    <p>Josefin Sans Bold - 24pt</p>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Title fontFamily='Open Sans'>
                <h3>
                  <span color="#cb1e25">Open Sans</span> - Font Family
                  <a href='fonts/Open_Sans.zip' download><GetApp /></a>
                </h3>
              </Title>
              <Text width="100">Utilizada em textos corridos, ode ser utilizado em subtitulos (bold), em casos onde a Josefin não se encaixa, como por exemplo as labels de inputs campos e quando estamos utilizando apenas a Josefin de titulo.</Text>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <div>
                    <Title fontFamily='Open Sans'>
                      <h1>H1 - Título</h1>
                    </Title>
                    <p>Open Sans - 48pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans'>
                      <h2>H2 - Título</h2>
                    </Title>
                    <p>Open Sans - 40pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans'>
                      <h3>H3 - Título</h3>
                    </Title>
                    <p>Open Sans - 32pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans'>
                      <h4>H4 - Título</h4>
                    </Title>
                    <p>Open Sans - 24pt</p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={600}>
                      <h1>H1 - Título</h1>
                    </Title>
                    <p>Open Sans Semi-bold - 48pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={600}>
                      <h2>H2 - Título</h2>
                    </Title>
                    <p>Open Sans Semi-bold - 40pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={600}>
                      <h3>H3 - Título</h3>
                    </Title>
                    <p>Open Sans Semi-bold - 32pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={600}>
                      <h4>H4 - Título</h4>
                    </Title>
                    <p>Open Sans Semi-bold - 24pt</p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={700}>
                      <h1>H1 - Título</h1>
                    </Title>
                    <p>Open Sans Bold - 48pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={700}>
                      <h2>H2 - Título</h2>
                    </Title>
                    <p>Open Sans Bold - 40pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={700}>
                      <h3>H3 - Título</h3>
                    </Title>
                    <p>Open Sans Bold - 32pt</p>
                  </div>
                  <div>
                    <Title fontFamily='Open Sans' fontWeight={700}>
                      <h4>H4 - Título</h4>
                    </Title>
                    <p>Open Sans Bold - 24pt</p>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </section>
        <section>
          <Title><h3><small>Parágrafo</small></h3></Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <Text width={'90%'}>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </Text>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <Title>
                <h2>Header with small subtitle <br />
                  <Small>Use {'"Small"'} tag for the headers</Small>
                </h2>
              </Title>
            </GridItem>
          </GridContainer>
        </section>

      </ThemeProvider>
    </div>
  );
}

export default App;
