<template>
  <v-main class="back">
    <v-container>
      <v-row>
        <v-col cols="13" sm="8">
          <v-sheet color="white" min-height="80vh" width="180vh" rounded="lg">
            <!-- card -->
            <v-sheet
              color="white"
              po
              min-height="85vh"
              width="180vh"
              rounded="lg"
            >
              <v-container class="d-flex">
                <v-card-title align-centerl text-sm
                  >Edito de modelo
                </v-card-title>

                <v-spacer></v-spacer>

                <v-radio-group class="mr-4" v-model="row" row>
                  <v-radio
                    color="green"
                    label="Zoom Ajuste"
                    value="zoom ajuste"
                  ></v-radio>
                </v-radio-group>
              </v-container>
              <v-container class="d-flex justify-content-between">
                <!-- Card de aquivos  -->
                <v-card
                  class="mx-4 px-2 overflow-y-auto"
                  height="220"
                  width="500"
                >
                  <!-- Container geral dos aquivos -->
                  <ul class="todos mt-3">
                    <div class="toggler active">
                      <font-awesome-icon
                        icon="fa-solid fa-folder"
                        class="mr-2"
                      />Folders
                    </div>

                    <ul class="toggler-target">
                      <div class="toggler active">
                        <font-awesome-icon
                          icon="fa-solid fa-folder"
                          class="mr-2"
                        />Files 1
                      </div>

                      <ul class="toggler-target">
                        <div>
                          <font-awesome-icon
                            icon="fa-solid fa-image"
                            class="mr-2"
                          />Img1.jpg
                        </div>
                        <div>
                          <font-awesome-icon
                            icon="fa-solid fa-image"
                            class="mr-2"
                          />Img2.jpg
                        </div>
                        <div>
                          <font-awesome-icon
                            icon="fa-solid fa-image"
                            class="mr-2"
                          />Img3.jpg
                        </div>
                        <div>
                          <font-awesome-icon
                            icon="fa-solid fa-image"
                            class="mr-2"
                          />Img4.jpg
                        </div>
                        <div>
                          <font-awesome-icon
                            icon="fa-solid fa-image"
                            class="mr-2"
                          />Img5.jpg
                        </div>
                        <div>
                          <font-awesome-icon
                            icon="fa-solid fa-image"
                            class="mr-2"
                          />Img6.jpg
                        </div>
                      </ul>
                    </ul>

                    <ul class="toggler-target">
                      <div class="toggler active">
                        <font-awesome-icon
                          icon="fa-solid fa-folder"
                          class="mr-2"
                        />Files 2
                      </div>
                    </ul>

                    <ul class="toggler-target">
                      <div class="toggler">
                        <font-awesome-icon
                          icon="fa-solid fa-folder"
                          class="mr-2"
                        />Files 3
                      </div>
                    </ul>
                  </ul>
                </v-card>
                <!-- Btn -->
                <div class="px-auto mb-4">
                  <h4 class="ml-auto mr-auto">Arquivos</h4>
                  <v-btn
                    color="green"
                    class="mb-4"
                    width="100px"
                    elevation="2"
                    small
                    >Inserir..</v-btn
                  >

                  <v-btn color="green" width="100px" elevation="2" small
                    >Apagar
                  </v-btn>
                </div>

                <!-- Grafico -->
                <v-container>
                  <v-row>
                    <v-img
                      max-width="600px"
                      position="right"
                      class="mx-auto"
                      style="cursor: pointer"
                      src="../assets/grafico.png"
                    ></v-img>
                  </v-row>
                </v-container>
              </v-container>

              <!-- Divisor -->

              <!-- Controladores -->
              <v-card class="mx-4 mt-2 px-2" height="190" width="1130">
                <v-container class="d-flex align-center justify-space-between">
                  <!-- Esquerda -->
                  <v-container>
                    <v-card class="d-flex align-center justify-space-between">
                      <v-card
                        class="mx-auto mt-0 pt-0"
                        width="320"
                        height="145"
                        outlined
                      >
                        <h6 class="titlew">Vista de movimento</h6>
                        <v-card fluid>
                          <v-col cols="2" sm="2" md="2">
                            <v-checkbox
                              v-model="ex4"
                              label="Esquerda"
                              color="green"
                              value="submit"
                              hide-details
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="2" sm="2" md="2">
                            <v-checkbox
                              v-model="ex4"
                              label="Direita"
                              color="green"
                              value="submit"
                              hide-details
                            ></v-checkbox>
                          </v-col>
                        </v-card>
                      </v-card>
                    </v-card>
                  </v-container>
                  <!-- Divisor -->

                  <!-- Direita -->
                  <v-container>
                    <!-- Card container -->
                    <v-card
                      class="d-flex align-center justify-space-between"
                      width="560"
                      height="160"
                      outlined
                    >
                      <h6 class="titley">Trilhos</h6>
                      <!-- Card 1 -->
                      <v-card class="mx-auto" width="320" height="145" outlined>
                        <h6 class="titlew">Balastro</h6>

                        <v-container class="lighten-5">
                          <v-row no-gutters>
                            <v-col cols="6">
                              <v-text-field
                                label="Largura"
                                value="6,000"
                                suffix="m"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row no-gutters>
                            <v-col cols="6">
                              <v-text-field
                                label="Altura"
                                value="0,500"
                                suffix="m"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                      <!-- card 2 -->
                      <v-card class="mx-auto" width="170" height="145" outlined>
                        <h6 class="titlew">Rastrear</h6>
                        <v-col class="ml-5" cols="8">
                          <v-text-field
                            label="Medidor ¹/²"
                            value="717"
                            suffix="mm"
                          ></v-text-field>
                        </v-col>
                      </v-card>
                    </v-card>
                  </v-container>
                </v-container>
              </v-card>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<script>
export default {
  name: "TodoItem",
};
</script>

<style>
.overflow-y-auto::-webkit-scrollbar {
  width: 0.4rem;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #239b56;
  border-radius: 0.1rem;
  width: 0.1rem;
}

/* toggler */

.ajuste {
  margin-top: 0;
  top: -10px;
}

.mb-aa {
  margin-bottom: 120px;
}

.titlew {
  margin-left: 40%;
  font-size: 10px;
}

.titley {
  transform: rotate(-90deg);
  font-size: 15px;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

.checkbox {
  margin-bottom: 50px;
}
.button {
  margin-left: 130px;
}

.todos {
  cursor: pointer;
}

.toggler::before {
  content: "\25B6";
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.3s ease-in-out;
}

.toggler.active::before {
  transform: rotate(90deg);
}

.toggler-target {
  display: block;
}

.toggler-target.active {
  display: block;
}
</style>