<template>
  <v-app-bar app flat color="white" class="nav">
    <div class="container">
      <!-- Logo da navbar -->
      <div>
        <h1>Logo</h1>
      </div>

      <!-- Separação dos items da navbar -->
      <v-spacer></v-spacer>

      <!-- Botão do dark mode  -->
      <div>
        <input
          v-model="$vuetify.theme.dark"
          persistent-hint
          type="checkbox"
          class="checkbox"
          id="checkbox"
        />
        <label for="checkbox" class="label">
          <font-awesome-icon icon="fa-solid fa-moon" class="fa-moon" />
          <font-awesome-icon icon="fa-solid fa-sun" class="fa-sun" />
          <div class="ball"></div>
        </label>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "TodoItem",
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav {
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.9);
}

.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  margin-right: 5px;
  width: 50px;
  height: 22px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 18px;
  height: 18px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translateX(28px);
}

.fa-moon {
  color: #5dade2;
  font-size: 14px;
}

.fa-sun {
  color: #f4d03f;
  font-size: 14px;
}
</style>