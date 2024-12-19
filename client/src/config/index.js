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
   { id: "anhdao", label: "Hoa anh đào 1", icon: Flower },
   { id: "thiendieu", label: "Hoa thiên điểu", icon: CloudLightning },
   { id: "hoathuocduoc", label: "Hoa thược dược", icon: BabyIcon },
   { id: "camtucau", label: "Hoa cẩm tú cầu", icon: WatchIcon },
   { id: "hoaoaihuong", label: "Hoa oải hương", icon: UmbrellaIcon },
];

export const brandsWithIcon = [
   { id: "andy", label: "Andy", icon: Shirt },
   { id: "luxflower", label: " Lux Flowers 1", icon: WashingMachine },
   { id: "gigiflower", label: "Gigi Flower", icon: ShoppingBasket },
   { id: "sayhoa", label: "Sayhoa", icon: Airplay },
   { id: "flowerboutique", label: "Flower Boutique.", icon: Images }
];

const category = [
   { id: "anhdao", label: "Hoa anh đào 1" },
   { id: "thiendieu", label: "Hoa thiên điểu" },
   { id: "hoathuocduoc", label: "Hoa thược dược" },
   { id: "camtucau", label: "Hoa cẩm tú cầu" },
   { id: "hoaoaihuong", label: "Hoa oải hương" },
]

const brand = [
   { id: "andy", label: "Andy" },
   { id: "luxflower", label: " Lux Flowers 1" },
   { id: "gigiflower", label: "Gigi Flower" },
   { id: "sayhoa", label: "Sayhoa" },
   { id: "flowerboutique", label: "Flower Boutique." }
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
