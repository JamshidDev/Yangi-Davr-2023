<template>
  <div class="search_container">
    <div class="search_item desktop_element" style="min-width: 90px">
      <div
        class="search_dropdown px-2 py-2 cursor-pointer"
        @click="open_select"
      >
        {{ select_List[selectDrop].name }} <i class="pi pi-angle-down pl-2"></i>
      </div>

      <OverlayPanel ref="op" class="dropdown_overal">
        <div class="select_list">
          <div
            @click="change_Select(0)"
            class="
              list_item
              text-500
              hover:text-primary hover:bg-primary
              font-medium
            "
            :class="[selectDrop == 0 && 'text-primary  bg-primary']"
          >
            {{ select_List[0].name }}
          </div>
          <div
            @click="change_Select(1)"
            class="
              list_item
              text-500
              hover:text-primary hover:bg-primary
              font-medium
            "
            :class="[selectDrop == 1 && 'text-primary  bg-primary']"
          >
            {{ select_List[1].name }}
          </div>
          <div
            @click="change_Select(2)"
            class="
              list_item
              text-500
              hover:text-primary hover:bg-primary
              font-medium
            "
            :class="[selectDrop == 2 && 'text-primary  bg-primary']"
          >
            {{ select_List[2].name }}
          </div>
        </div>
      </OverlayPanel>
    </div>
    <div class="search_item cs_full">
      <div class="search_box relative">
        <i class="pi pi-search text-sm search_icon text-600"></i>
        <input
          type="text"
          class="search_input"
          placeholder="Kursni nomi orqali izalang..."
        />
        <i class="pi pi-times search_close"></i>
      </div>
    </div>
    <div class="search_item px-2 desktop_element" style="min-width: 180px">
      <Checkbox
        inputId="city1"
        name="city"
        value="Chicago"
        v-model="myCourses"
      />
      <label class="pl-1" for="city1">Mening kurslarim</label>
    </div>
    <div class="search_item px-2 desktop_element" style="min-width: 200px">
      <Checkbox
        inputId="city1"
        name="city"
        value="Chicago"
        v-model="saleCourses"
      />
      <label class="pl-1" for="city1">Chegirmadagi kurslar</label>
    </div>
    <div class="search_item ml-auto pr-2" style="min-width: 90px">
      <button class="search_btn">Izlash</button>
    </div>
    <div class="search_item mr-2 mobile_element">
      <Button
        @click="control_dialog(true)"
        icon="pi pi-sliders-v"
        class="p-button-primary p-button-text"
      />
    </div>
  </div>
  <Dialog
    header="FILTER SOZLAMALARI"
    v-model:visible="filter_dialog"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <div class="grid">
      <div class="col-12">
        <div
          v-for="selectItem of select_List"
          :key="selectItem.id"
          class="field-radiobutton"
        >
          <RadioButton
            :inputId="selectItem.id.toString()"
            name="category"
            :value="selectItem"
            v-model="selectRadio"
          />
          <label :for="selectItem.id.toString()">{{ selectItem.name }}</label>
        </div>
      </div>
      <div class="col-12">
        <Checkbox
        inputId="city1"
        name="city"
        value="Chicago"
        v-model="saleCourses"
      />
      <label class="pl-1" for="city1">Chegirmadagi kurslar</label>
      </div>
      <div class="col-12">
        <Checkbox
        inputId="city1"
        name="city"
        value="Chicago"
        v-model="myCourses"
      />
      <label class="pl-1" for="city1">Mening kurslarim</label>
      </div>
    </div>
    <template #footer>
      <div class="grid">
        <div class="col-12 flex justify-content-center">
          <Button label="TOZALASH" class="p-button-text w-full font-semibold" />
        </div>
        <div class="col-12 flex justify-content-center">
          <Button label="SARALSH" class="p-button-primary w-full font-semibold" autofocus />
        </div>
      </div>
    </template>
  </Dialog>
</template>
<script>
export default {
  watch: {
    selectRadio(val) {
      console.log(val);
    },
  },
  data() {
    return {
      myCourses: [],
      saleCourses:[],
      selectDrop: 0,
      selectRadio: {
        id: 0,
        name: "Barchasi",
      },

      filter_dialog: false,

      select_List: [
        {
          id: 0,
          name: "Barchasi",
        },
        {
          id: 1,
          name: "Bepul",
        },
        {
          id: 2,
          name: "Pullik",
        },
      ],
    };
  },
  methods: {
    change_Select(id) {
      this.selectDrop = id;
    },
    open_select() {
      this.$refs.op.toggle(event);
    },
    control_dialog(item) {
      this.filter_dialog = item;
    },
  },
};
</script>
<style lang="scss" >
.p-overlaypanel-content {
  padding: 0px !important;
}
.search_container {
  width: 100% !important;
  background-color: #f3f4f6;
  border-radius: 6px;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative !important;
}

.search_dropdown {
  display: flex;
  position: relative !important;
  min-width: 120px;
}
.search_item {
  .p-overlaypanel-content {
    padding: 0px !important;
  }
}
.search_overal {
  width: 100px;
  position: absolute;
  top: 20px;
  border: 1px solid rgb(174, 174, 174);
  border-radius: 4px;
  background-color: #ffffff;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px !important;
}
.select_list {
  width: 100%;
  height: auto;
  cursor: pointer;
}
.list_item {
  width: 100%;
  padding: 2px 12px;
  text-align: left !important;
  margin: 4px 0px;
}
.cs_full {
  width: calc(100% - 640px);
}
.search_box {
  width: 100%;
  padding: 0px 25px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 4px;
  height: 30px;
}
.search_icon {
  position: absolute;
  left: 4px;
  top: 6px;
}
.search_close {
  visibility: hidden;
  position: absolute;
  right: 4px;
  top: 6px;
}
.search_input {
  border: none !important;
  width: 100%;
  height: 100% !important;
  font-weight: 500;
  font-size: 18px;
}
.search_input:focus {
  outline: none;
}
.search_input::placeholder {
  font-weight: 500 !important;
  font-size: 14px !important;
}
.mobile_element {
  display: none;
}

.search_btn {
  padding: 7px 18px;
  background-color: #883cae;
  border: 1px solid #ffffff;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
}

@media only screen and (max-width: 900px) {
  .desktop_element {
    display: none !important;
  }
  .mobile_element {
    display: inline-block !important;
  }
  .cs_full {
    width: calc(100% - 100px);
    padding: 0px 5px;
  }
}
</style>