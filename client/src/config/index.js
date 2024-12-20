import {
   Airplay,
   BabyIcon,
   ChevronLeftIcon,
   ChevronRightIcon,
   CloudLightning,
   Flower,
   Images,
   Shirt,
   ShirtIcon,
   ShoppingBasket,
   UmbrellaIcon,
   WashingMachine,
   WatchIcon,
} from "lucide-react";


export const registerFormControls = [
   {
      name: "userName",
      label: "User Name",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
   },
   {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
   },
   {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
   },
];


export const loginFormControls = [
   {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
   },
   {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
   },
];

export const categoriesWithIcon = [
   { id: "sirius", label: "Sirius", icon: Flower },
   { id: "sh", label: "SH", icon: CloudLightning },
   { id: "vision", label: "Vision", icon: BabyIcon },
   { id: "wave", label: "Wave", icon: WatchIcon },
   { id: "vario", label: "vario", icon: UmbrellaIcon },
];

export const brandsWithIcon = [
   { id: "honda", label: "Honda", icon: Shirt },
   { id: "yamaha", label: "Yamaha", icon: WashingMachine },
   { id: "kawasaki", label: "Kawasaki", icon: ShoppingBasket },
   { id: "suzuki", label: "Suzuki", icon: Airplay },
   { id: "vinfast", label: "Vinfast", icon: Images }
];

const category = [
   { id: "sirius", label: "Sirius" },
   { id: "sh", label: "SH" },
   { id: "vision", label: "Vision" },
   { id: "wave", label: "Wave" },
   { id: "vario", label: "vario" },
]

const brand = [
   { id: "honda", label: "Honda" },
   { id: "yamaha", label: "Yamaha" },
   { id: "kawasaki", label: "Kawasaki" },
   { id: "suzuki", label: "Suzuki" },
   { id: "vinfast", label: "Vinfast" }
]

export const addProductFormElements = [
   {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
   },
   {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
   },
   {
      label: "Category",
      name: "category",
      componentType: "select",
      options: category,
   },
   {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: brand,
   },
   {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
   },
   {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
   },
   {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
   },
];

export const shoppingViewHeaderMenuItems = [
   {
      id: "home",
      label: "Home",
      path: "/shop/home",
   },
   {
      id: "products",
      label: "Products",
      path: "/shop/listing",
   },
   {
      id: "search",
      label: "Search",
      path: "/shop/search",
   },
];

const cateObj = category.reduce((acc, item) => {
   acc[item.id] = item.label;
   return acc;
}, {});

const brandObj = brand.reduce((acc, item) => {
   acc[item.id] = item.label;
   return acc;
}, {})

export const categoryOptionsMap = cateObj;

export const brandOptionsMap = brandObj;

export const filterOptions = {
   category: category,
   brand: brand,
};

export const sortOptions = [
   { id: "price-lowtohigh", label: "Price: Low to High" },
   { id: "price-hightolow", label: "Price: High to Low" },
   { id: "title-atoz", label: "Title: A to Z" },
   { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
   {
      label: "Address",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Enter your address",
   },
   {
      label: "City",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Enter your city",
   },
   {
      label: "Pincode",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Enter your pincode",
   },
   {
      label: "Phone",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter your phone number",
   },
   {
      label: "Notes",
      name: "notes",
      componentType: "textarea",
      placeholder: "Enter any additional notes",
   },
];
