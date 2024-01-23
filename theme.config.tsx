import { Footer } from "@/components/Footer";
import { SearchAlgolia } from "@/components/SearchAlgolia";
import { cn, getImageType } from "@/lib/utils";

import { useRouter } from "next/router";
import { DocsThemeConfig, ThemeSwitch, useConfig } from "nextra-theme-docs";

const SITE_ROOT = "https://seiyanization.com/";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/NIMA-Enterprises/seiyanization",
  },
  logo: (
    <div className="w-16">
      <svg
        width="224"
        height="73"
        viewBox="0 0 424 73"
        fill="none"
        className="logo-dark"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140.12 36.1058L133.011 36.2958C132.937 35.7891 132.736 35.3405 132.409 34.9499C132.082 34.5488 131.654 34.2374 131.127 34.0158C130.609 33.7835 130.008 33.6674 129.322 33.6674C128.424 33.6674 127.659 33.8469 127.026 34.2058C126.403 34.5647 126.097 35.0502 126.107 35.6624C126.097 36.1374 126.287 36.5491 126.677 36.8974C127.079 37.2458 127.791 37.5255 128.815 37.7366L133.502 38.6233C135.929 39.0877 137.734 39.8583 138.917 40.935C140.109 42.0116 140.711 43.4366 140.722 45.21C140.711 46.8778 140.215 48.3292 139.233 49.5642C138.262 50.7992 136.932 51.7597 135.243 52.4458C133.554 53.1214 131.623 53.4592 129.448 53.4592C125.975 53.4592 123.236 52.7467 121.231 51.3217C119.236 49.8861 118.096 47.965 117.811 45.5583L125.458 45.3683C125.627 46.255 126.065 46.9305 126.772 47.395C127.48 47.8594 128.382 48.0916 129.48 48.0916C130.472 48.0916 131.28 47.9069 131.902 47.5375C132.525 47.168 132.842 46.6772 132.852 46.065C132.842 45.5161 132.599 45.078 132.124 44.7508C131.649 44.413 130.905 44.1491 129.892 43.9591L125.648 43.1516C123.21 42.7083 121.394 41.8902 120.202 40.6975C119.009 39.4941 118.418 37.9636 118.428 36.1058C118.418 34.4802 118.85 33.0922 119.727 31.9416C120.603 30.7805 121.848 29.8938 123.463 29.2816C125.078 28.6694 126.984 28.3632 129.179 28.3632C132.472 28.3632 135.069 29.0546 136.969 30.4374C138.869 31.8096 139.919 33.6991 140.12 36.1058ZM156.794 53.4592C154.25 53.4592 152.054 52.9578 150.207 51.955C148.37 50.9417 146.956 49.5008 145.964 47.6325C144.982 45.7536 144.491 43.5211 144.491 40.935C144.491 38.4227 144.987 36.2272 145.979 34.3483C146.972 32.4588 148.37 30.9916 150.175 29.9466C151.98 28.891 154.107 28.3632 156.556 28.3632C158.287 28.3632 159.871 28.6324 161.306 29.1708C162.742 29.7091 163.982 30.506 165.027 31.5616C166.072 32.6172 166.885 33.9208 167.465 35.4724C168.046 37.0136 168.336 38.7816 168.336 40.7766V42.7083H147.199V38.2116H161.132C161.121 37.3883 160.926 36.6547 160.546 36.0108C160.166 35.3669 159.644 34.8655 158.979 34.5066C158.324 34.1372 157.569 33.9524 156.714 33.9524C155.849 33.9524 155.073 34.1477 154.387 34.5383C153.701 34.9183 153.157 35.4408 152.756 36.1058C152.355 36.7602 152.144 37.5044 152.123 38.3383V42.9141C152.123 43.9064 152.318 44.7772 152.709 45.5266C153.099 46.2655 153.653 46.8408 154.371 47.2525C155.089 47.6641 155.944 47.87 156.936 47.87C157.622 47.87 158.245 47.775 158.804 47.585C159.364 47.395 159.844 47.1153 160.245 46.7458C160.646 46.3764 160.947 45.9225 161.148 45.3841L168.257 45.59C167.961 47.1839 167.312 48.5719 166.31 49.7542C165.317 50.9258 164.014 51.8389 162.399 52.4933C160.784 53.1372 158.915 53.4592 156.794 53.4592ZM173.182 53V28.6799H180.925V53H173.182ZM177.062 25.8457C175.974 25.8457 175.04 25.4869 174.259 24.7691C173.478 24.0407 173.087 23.1646 173.087 22.1407C173.087 21.1274 173.478 20.2618 174.259 19.5441C175.04 18.8157 175.974 18.4515 177.062 18.4515C178.159 18.4515 179.093 18.8157 179.864 19.5441C180.645 20.2618 181.036 21.1274 181.036 22.1407C181.036 23.1646 180.645 24.0407 179.864 24.7691C179.093 25.4869 178.159 25.8457 177.062 25.8457ZM191.479 62.12C190.55 62.12 189.674 62.0461 188.851 61.8984C188.027 61.7611 187.32 61.5764 186.729 61.3442L188.439 55.7233C189.199 55.9767 189.885 56.1245 190.497 56.1667C191.12 56.2089 191.653 56.1086 192.096 55.8658C192.55 55.6336 192.899 55.2167 193.141 54.615L193.442 53.8867L184.797 28.6799L192.904 28.6799L197.385 46.0333H197.638L202.182 28.6799H210.336L201.169 55.3275C200.726 56.6575 200.098 57.8292 199.285 58.8425C198.483 59.8664 197.443 60.6686 196.166 61.2492C194.899 61.8298 193.337 62.12 191.479 62.12ZM220.4 53.4117C218.848 53.4117 217.471 53.1531 216.267 52.6358C215.074 52.1081 214.13 51.3164 213.433 50.2608C212.747 49.1947 212.404 47.8594 212.404 46.255C212.404 44.9039 212.641 43.7639 213.116 42.835C213.591 41.9061 214.246 41.1513 215.08 40.5708C215.914 39.9902 216.874 39.5522 217.961 39.2566C219.049 38.9505 220.21 38.7447 221.445 38.6391C222.827 38.5125 223.941 38.3805 224.786 38.2433C225.63 38.0955 226.242 37.8897 226.622 37.6258C227.013 37.3513 227.208 36.9661 227.208 36.4699V36.3908C227.208 35.578 226.928 34.9499 226.369 34.5066C225.809 34.0633 225.055 33.8416 224.105 33.8416C223.081 33.8416 222.257 34.0633 221.635 34.5066C221.012 34.9499 220.616 35.5622 220.447 36.3433L213.306 36.0899C213.517 34.6122 214.061 33.2927 214.937 32.1316C215.824 30.9599 217.038 30.0416 218.579 29.3766C220.131 28.701 221.994 28.3632 224.168 28.3632C225.72 28.3632 227.15 28.548 228.459 28.9174C229.768 29.2763 230.908 29.8041 231.879 30.5008C232.85 31.1869 233.599 32.0313 234.127 33.0341C234.666 34.0369 234.935 35.1822 234.935 36.4699V53H227.651V49.6117H227.461C227.029 50.435 226.474 51.1317 225.799 51.7017C225.134 52.2717 224.347 52.6992 223.44 52.9842C222.542 53.2692 221.529 53.4117 220.4 53.4117ZM222.791 48.345C223.624 48.345 224.374 48.1761 225.039 47.8383C225.714 47.5005 226.253 47.0361 226.654 46.445C227.055 45.8433 227.256 45.1466 227.256 44.355V42.0433C227.034 42.1594 226.765 42.265 226.448 42.36C226.142 42.455 225.804 42.5447 225.435 42.6291C225.065 42.7136 224.685 42.7875 224.295 42.8508C223.904 42.9141 223.529 42.9722 223.171 43.025C222.442 43.1411 221.819 43.3205 221.302 43.5633C220.796 43.8061 220.405 44.1227 220.131 44.5133C219.867 44.8933 219.735 45.3472 219.735 45.875C219.735 46.6772 220.02 47.2894 220.59 47.7116C221.17 48.1339 221.904 48.345 222.791 48.345ZM248.303 39.13V53H240.561V28.6799H247.923V33.1449H248.192C248.731 31.6566 249.649 30.4902 250.947 29.6458C252.246 28.7908 253.792 28.3632 255.587 28.3632C257.297 28.3632 258.78 28.7485 260.036 29.5191C261.302 30.2791 262.284 31.3452 262.981 32.7174C263.688 34.0791 264.036 35.673 264.026 37.4991V53H256.283V39.0191C256.294 37.668 255.951 36.6124 255.254 35.8524C254.568 35.0924 253.613 34.7124 252.388 34.7124C251.575 34.7124 250.858 34.8919 250.235 35.2508C249.623 35.5991 249.148 36.1005 248.81 36.7549C248.483 37.4094 248.314 38.2011 248.303 39.13ZM269.711 53V28.6799H277.454V53H269.711ZM273.59 25.8457C272.503 25.8457 271.569 25.4869 270.788 24.7691C270.007 24.0407 269.616 23.1646 269.616 22.1407C269.616 21.1274 270.007 20.2618 270.788 19.5441C271.569 18.8157 272.503 18.4515 273.59 18.4515C274.688 18.4515 275.622 18.8157 276.393 19.5441C277.174 20.2618 277.564 21.1274 277.564 22.1407C277.564 23.1646 277.174 24.0407 276.393 24.7691C275.622 25.4869 274.688 25.8457 273.59 25.8457ZM283.337 53V48.5825L294.61 34.8549V34.6966H283.733V28.6799L303.841 28.6799V33.5249L293.391 46.825V46.9833H304.221V53H283.337ZM316.972 53.4117C315.42 53.4117 314.043 53.1531 312.839 52.6358C311.647 52.1081 310.702 51.3164 310.005 50.2608C309.319 49.1947 308.976 47.8594 308.976 46.255C308.976 44.9039 309.214 43.7639 309.689 42.835C310.164 41.9061 310.818 41.1513 311.652 40.5708C312.486 39.9902 313.446 39.5522 314.534 39.2566C315.621 38.9505 316.782 38.7447 318.017 38.6391C319.4 38.5125 320.513 38.3805 321.358 38.2433C322.202 38.0955 322.814 37.8897 323.194 37.6258C323.585 37.3513 323.78 36.9661 323.78 36.4699V36.3908C323.78 35.578 323.501 34.9499 322.941 34.5066C322.382 34.0633 321.627 33.8416 320.677 33.8416C319.653 33.8416 318.83 34.0633 318.207 34.5066C317.584 34.9499 317.188 35.5622 317.019 36.3433L309.879 36.0899C310.09 34.6122 310.633 33.2927 311.509 32.1316C312.396 30.9599 313.61 30.0416 315.151 29.3766C316.703 28.701 318.566 28.3632 320.74 28.3632C322.292 28.3632 323.722 28.548 325.031 28.9174C326.34 29.2763 327.48 29.8041 328.451 30.5008C329.422 31.1869 330.172 32.0313 330.7 33.0341C331.238 34.0369 331.507 35.1822 331.507 36.4699V53H324.224V49.6117H324.034C323.601 50.435 323.047 51.1317 322.371 51.7017C321.706 52.2717 320.92 52.6992 320.012 52.9842C319.115 53.2692 318.101 53.4117 316.972 53.4117ZM319.363 48.345C320.197 48.345 320.946 48.1761 321.611 47.8383C322.287 47.5005 322.825 47.0361 323.226 46.445C323.627 45.8433 323.828 45.1466 323.828 44.355V42.0433C323.606 42.1594 323.337 42.265 323.02 42.36C322.714 42.455 322.376 42.5447 322.007 42.6291C321.638 42.7136 321.258 42.7875 320.867 42.8508C320.476 42.9141 320.102 42.9722 319.743 43.025C319.014 43.1411 318.392 43.3205 317.874 43.5633C317.368 43.8061 316.977 44.1227 316.703 44.5133C316.439 44.8933 316.307 45.3472 316.307 45.875C316.307 46.6772 316.592 47.2894 317.162 47.7116C317.743 48.1339 318.476 48.345 319.363 48.345ZM350.86 28.6799V34.3799H335.518V28.6799L350.86 28.6799ZM338.732 22.8532H346.475V45.3525C346.475 45.8275 346.549 46.2128 346.696 46.5083C346.855 46.7933 347.082 46.9991 347.377 47.1258C347.673 47.2419 348.026 47.3 348.438 47.3C348.734 47.3 349.045 47.2736 349.372 47.2208C349.71 47.1575 349.963 47.1047 350.132 47.0625L351.304 52.6517C350.934 52.7572 350.412 52.8892 349.736 53.0475C349.071 53.2058 348.274 53.3061 347.345 53.3483C345.53 53.4328 343.973 53.2217 342.675 52.715C341.387 52.1978 340.4 51.3956 339.714 50.3083C339.038 49.2211 338.711 47.8541 338.732 46.2075V22.8532ZM355.703 53V28.6799H363.445V53H355.703ZM359.582 25.8457C358.495 25.8457 357.56 25.4869 356.779 24.7691C355.998 24.0407 355.608 23.1646 355.608 22.1407C355.608 21.1274 355.998 20.2618 356.779 19.5441C357.56 18.8157 358.495 18.4515 359.582 18.4515C360.68 18.4515 361.614 18.8157 362.384 19.5441C363.165 20.2618 363.556 21.1274 363.556 22.1407C363.556 23.1646 363.165 24.0407 362.384 24.7691C361.614 25.4869 360.68 25.8457 359.582 25.8457ZM380.618 53.4592C378.063 53.4592 375.868 52.9367 374.031 51.8917C372.205 50.8361 370.796 49.3689 369.803 47.49C368.822 45.6005 368.331 43.4102 368.331 40.9191C368.331 38.4174 368.822 36.2272 369.803 34.3483C370.796 32.4588 372.205 30.9916 374.031 29.9466C375.868 28.891 378.063 28.3632 380.618 28.3632C383.172 28.3632 385.362 28.891 387.188 29.9466C389.025 30.9916 390.434 32.4588 391.416 34.3483C392.408 36.2272 392.904 38.4174 392.904 40.9191C392.904 43.4102 392.408 45.6005 391.416 47.49C390.434 49.3689 389.025 50.8361 387.188 51.8917C385.362 52.9367 383.172 53.4592 380.618 53.4592ZM380.665 47.6166C381.594 47.6166 382.38 47.3316 383.024 46.7616C383.668 46.1916 384.159 45.4 384.497 44.3866C384.845 43.3733 385.019 42.2016 385.019 40.8716C385.019 39.5205 384.845 38.3383 384.497 37.3249C384.159 36.3116 383.668 35.5199 383.024 34.9499C382.38 34.3799 381.594 34.0949 380.665 34.0949C379.705 34.0949 378.892 34.3799 378.227 34.9499C377.572 35.5199 377.071 36.3116 376.723 37.3249C376.385 38.3383 376.216 39.5205 376.216 40.8716C376.216 42.2016 376.385 43.3733 376.723 44.3866C377.071 45.4 377.572 46.1916 378.227 46.7616C378.892 47.3316 379.705 47.6166 380.665 47.6166ZM405.505 39.13V53H397.762V28.6799H405.125V33.1449H405.394C405.932 31.6566 406.851 30.4902 408.149 29.6458C409.447 28.7908 410.994 28.3632 412.788 28.3632C414.498 28.3632 415.981 28.7485 417.237 29.5191C418.504 30.2791 419.486 31.3452 420.182 32.7174C420.89 34.0791 421.238 35.673 421.227 37.4991V53L413.485 53V39.0191C413.495 37.668 413.152 36.6124 412.456 35.8524C411.77 35.0924 410.814 34.7124 409.59 34.7124C408.777 34.7124 408.059 34.8919 407.436 35.2508C406.824 35.5991 406.349 36.1005 406.011 36.7549C405.684 37.4094 405.515 38.2011 405.505 39.13Z"
          fill="white"
        />
        <g clipPath="url(#clip0_101_578)">
          <path
            d="M7.28143 10.3377C7.28143 10.3377 4.30294 26.5599 15.263 32.6934C15.263 32.6934 25.07 20.0876 35.3506 30.4461C39.1595 35.0859 37.581 39.0205 35.8241 41.3439C35.1996 42.1667 33.8819 41.6896 33.9231 40.6593C34.0604 36.9529 33.2368 31.0615 26.5592 31.0615C16.8208 31.0615 11.5501 50.9624 39.784 50.9624C39.784 50.9624 42.5909 69.7016 61.1893 63.4368C61.1893 63.4368 57.202 43.3353 73.2268 43.2662C77.9484 43.121 79.3279 45.9837 79.6093 48.6252C79.7534 49.9943 78.1269 50.8379 77.1043 49.9183C75.6906 48.639 73.6042 47.6433 70.8522 48.6459C67.5443 49.8491 56.4471 66.099 78.6347 66.099C100.822 66.099 102.579 35.0928 86.4104 30.2524C86.4104 30.2524 89.7251 8.51218 69.3012 8.51218C53.8803 8.51218 59.6314 27.4588 65.9178 27.4588C72.2042 27.4588 69.3012 19.6243 74.2356 19.6243C79.17 19.6243 74.8464 33.1843 66.3914 33.1843C57.9363 33.1843 47.5185 17.785 56.852 9.05845C56.852 9.05845 47.1822 0.539365 35.7486 17.5775C35.7486 17.5775 31.9603 13.3526 26.7514 13.3526C21.5425 13.3526 7.27457 17.5775 7.27457 10.3515L7.28143 10.3377Z"
            fill="#ED0000"
          />
          <path
            d="M78.6347 71.9628C74.6543 71.9628 69.0336 71.4096 64.861 68.775L64.4492 68.5123L63.0286 68.9963C59.9128 70.0474 56.9137 70.5798 54.1206 70.5798C42.6664 70.5798 37.5604 62.2267 35.5359 57.248L35.2957 56.6602L34.6712 56.6049C28.7073 56.0725 23.821 54.5512 20.1562 52.0964C15.5581 49.0124 12.9227 44.3725 12.9227 39.3731C12.9227 39.1726 12.9227 38.9651 12.9364 38.7646L12.9639 38.1284L12.408 37.8173C1.33818 31.6216 0.233258 17.9786 1.38622 10.2063L15.1669 11.4786V10.3446C15.1669 9.77759 15.0159 9.20366 14.7688 8.68504C16.6973 8.62281 18.9689 8.31164 20.9935 8.03505C23.2102 7.73079 25.118 7.46803 26.7583 7.46803C29.174 7.46803 31.5829 8.03505 33.93 9.14834L34.6094 9.47334L35.1241 8.92015C39.9624 3.69944 45.1645 1.05106 50.593 1.05106C55.5137 1.05106 58.952 3.27072 60.2011 4.22497L60.702 4.6122L61.2717 4.33561C63.5707 3.20849 66.2747 2.63456 69.3012 2.63456C78.7308 2.63456 84.077 6.58984 86.9045 9.90205C91.2624 15.019 92.3262 21.4775 92.4497 25.9929L92.4634 26.5461L92.9232 26.8434C100.273 31.5455 104.103 40.9843 102.675 50.8725C101.159 61.3762 93.136 71.9766 78.6347 71.9766V71.9628Z"
            fill="#0F172A"
          />
          <path
            d="M50.5931 2.07445C55.198 2.07445 58.4099 4.14891 59.5766 5.04092L60.5854 5.80847L61.7246 5.24837C63.8796 4.1904 66.4326 3.65104 69.3081 3.65104C78.3465 3.65104 83.4456 7.4058 86.129 10.559C90.2879 15.4408 91.3036 21.6504 91.4203 25.9998L91.4477 27.0993L92.3742 27.6939C99.3881 32.1817 103.032 41.2125 101.66 50.6996C100.205 60.7607 92.5252 70.9186 78.6416 70.9186C74.7984 70.9186 69.3836 70.3931 65.4169 67.8899L64.5865 67.3644L63.66 67.6825L62.7129 68.0075C59.6932 69.024 56.804 69.5426 54.1274 69.5426C43.2772 69.5426 38.4252 61.5905 36.4967 56.8538L36.0232 55.6852L34.7741 55.5746C28.9819 55.056 24.2602 53.5969 20.7395 51.2321C16.4365 48.3417 13.9659 44.0199 13.9659 39.3731C13.9659 39.1864 13.9659 38.9928 13.9796 38.8061L14.0345 37.5269L12.9296 36.9045C2.77254 31.2343 1.3931 18.9328 2.27841 11.3265L13.9522 12.4052L16.1963 12.6127V10.3377C16.1963 10.1026 16.1757 9.86748 16.1414 9.63929C17.7748 9.51482 19.5317 9.2728 21.1376 9.05153C23.3063 8.75419 25.1867 8.49834 26.7583 8.49834C29.0162 8.49834 31.2878 9.03079 33.4908 10.0818L34.8496 10.7249L35.8722 9.61855C40.5046 4.6122 45.4596 2.07445 50.5862 2.07445M50.5931 0C43.9223 0 38.4732 3.7755 34.3692 8.201C32.2417 7.19144 29.6681 6.42389 26.7583 6.42389C25.0494 6.42389 23.1072 6.68665 20.8631 6.99782C18.6258 7.30207 16.0865 7.65473 14.0894 7.65473C12.7649 7.65473 12.2845 7.50261 12.2639 7.49569C13.0188 7.75154 14.1375 9.05844 14.1375 10.3446L0.528381 9.07919C-0.905959 16.9206 -0.130454 31.9811 11.9208 38.73C11.9139 38.9444 11.907 39.1588 11.907 39.38C11.907 44.7321 14.7139 49.6831 19.6003 52.9677C23.4229 55.5331 28.4466 57.1028 34.5957 57.6491C37.2585 64.1974 43.188 71.6239 54.1274 71.6239C57.0304 71.6239 60.1393 71.0708 63.3649 69.9851L64.3188 69.6601C68.711 72.433 74.5582 73 78.6348 73C93.7537 73 102.113 61.957 103.691 51.0039C105.208 40.5002 101.042 30.7918 93.4723 25.9514C93.3419 21.3115 92.2507 14.5765 87.68 9.21057C84.7153 5.7324 79.122 1.5835 69.3013 1.5835C65.7257 1.5835 62.9462 2.34413 60.8187 3.38827C59.3913 2.29573 55.7745 0 50.5931 0Z"
            fill="white"
          />
          <path
            d="M2.97171 12.5228C2.97171 12.5228 4.3031 26.5599 15.2631 32.6934C15.2631 32.6934 25.0702 20.0876 35.3507 30.4461C39.1596 35.0859 37.5812 39.0205 35.8243 41.3439C35.1998 42.1667 33.8821 41.6896 33.9233 40.6593C34.0605 36.9529 33.237 31.0615 26.5594 31.0615C16.821 31.0615 11.5503 50.9624 39.7842 50.9624C39.7842 50.9624 42.5911 69.7016 61.1895 63.4368C61.1895 63.4368 57.2021 43.3353 73.227 43.2662C77.9486 43.121 79.328 45.9837 79.6094 48.6252C79.7535 49.9943 78.127 50.8379 77.1045 49.9183C75.6907 48.639 73.6044 47.6433 70.8524 48.6459C67.5445 49.8491 56.4472 66.099 78.6349 66.099C100.823 66.099 102.579 35.0928 86.4105 30.2524C86.4105 30.2524 89.7253 8.51218 69.3014 8.51218C53.8805 8.51218 59.6316 27.4588 65.918 27.4588C72.2044 27.4588 69.3014 19.6243 74.2358 19.6243C79.1702 19.6243 74.8466 33.1843 66.3915 33.1843C57.9365 33.1843 47.5186 17.785 56.8521 9.05845C56.8521 9.05845 47.1823 0.539365 35.7488 17.5775C35.7488 17.5775 31.9605 13.3526 26.7516 13.3526C21.5426 13.3526 8.6473 17.8472 2.96484 12.5366L2.97171 12.5228Z"
            fill="url(#paint0_linear_101_578)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_101_578"
            x1="50.047"
            y1="6.92868"
            x2="61.1179"
            y2="80.3146"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#780000" />
            <stop offset="1" stopColor="#C1121F" />
          </linearGradient>
          <clipPath id="clip0_101_578">
            <rect width="104" height="73" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="224"
        className="logo-light"
        height="73"
        viewBox="0 0 424 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140.12 36.1058L133.011 36.2958C132.937 35.7891 132.736 35.3405 132.409 34.9499C132.082 34.5488 131.654 34.2374 131.127 34.0158C130.609 33.7835 130.008 33.6674 129.322 33.6674C128.424 33.6674 127.659 33.8469 127.026 34.2058C126.403 34.5647 126.097 35.0502 126.107 35.6624C126.097 36.1374 126.287 36.5491 126.677 36.8974C127.079 37.2458 127.791 37.5255 128.815 37.7366L133.502 38.6233C135.929 39.0877 137.734 39.8583 138.917 40.935C140.109 42.0116 140.711 43.4366 140.722 45.21C140.711 46.8778 140.215 48.3292 139.233 49.5642C138.262 50.7992 136.932 51.7597 135.243 52.4458C133.554 53.1214 131.623 53.4592 129.448 53.4592C125.975 53.4592 123.236 52.7467 121.231 51.3217C119.236 49.8861 118.096 47.965 117.811 45.5583L125.458 45.3683C125.627 46.255 126.065 46.9305 126.772 47.395C127.48 47.8594 128.382 48.0916 129.48 48.0916C130.472 48.0916 131.28 47.9069 131.902 47.5375C132.525 47.168 132.842 46.6772 132.852 46.065C132.842 45.5161 132.599 45.078 132.124 44.7508C131.649 44.413 130.905 44.1491 129.892 43.9591L125.648 43.1516C123.21 42.7083 121.394 41.8902 120.202 40.6975C119.009 39.4941 118.418 37.9636 118.428 36.1058C118.418 34.4802 118.85 33.0922 119.727 31.9416C120.603 30.7805 121.848 29.8938 123.463 29.2816C125.078 28.6694 126.984 28.3632 129.179 28.3632C132.472 28.3632 135.069 29.0546 136.969 30.4374C138.869 31.8096 139.919 33.6991 140.12 36.1058ZM156.794 53.4592C154.25 53.4592 152.054 52.9578 150.207 51.955C148.37 50.9417 146.956 49.5008 145.964 47.6325C144.982 45.7536 144.491 43.5211 144.491 40.935C144.491 38.4227 144.987 36.2272 145.979 34.3483C146.972 32.4588 148.37 30.9916 150.175 29.9466C151.98 28.891 154.107 28.3632 156.556 28.3632C158.287 28.3632 159.871 28.6324 161.306 29.1708C162.742 29.7091 163.982 30.506 165.027 31.5616C166.072 32.6172 166.885 33.9208 167.465 35.4724C168.046 37.0136 168.336 38.7816 168.336 40.7766V42.7083H147.199V38.2116H161.132C161.121 37.3883 160.926 36.6547 160.546 36.0108C160.166 35.3669 159.644 34.8655 158.979 34.5066C158.324 34.1372 157.569 33.9524 156.714 33.9524C155.849 33.9524 155.073 34.1477 154.387 34.5383C153.701 34.9183 153.157 35.4408 152.756 36.1058C152.355 36.7602 152.144 37.5044 152.123 38.3383V42.9141C152.123 43.9064 152.318 44.7772 152.709 45.5266C153.099 46.2655 153.653 46.8408 154.371 47.2525C155.089 47.6641 155.944 47.87 156.936 47.87C157.622 47.87 158.245 47.775 158.804 47.585C159.364 47.395 159.844 47.1153 160.245 46.7458C160.646 46.3764 160.947 45.9225 161.148 45.3841L168.257 45.59C167.961 47.1839 167.312 48.5719 166.31 49.7542C165.317 50.9258 164.014 51.8389 162.399 52.4933C160.784 53.1372 158.915 53.4592 156.794 53.4592ZM173.182 53V28.6799H180.925V53H173.182ZM177.062 25.8457C175.974 25.8457 175.04 25.4869 174.259 24.7691C173.478 24.0407 173.087 23.1646 173.087 22.1407C173.087 21.1274 173.478 20.2618 174.259 19.5441C175.04 18.8157 175.974 18.4515 177.062 18.4515C178.159 18.4515 179.093 18.8157 179.864 19.5441C180.645 20.2618 181.036 21.1274 181.036 22.1407C181.036 23.1646 180.645 24.0407 179.864 24.7691C179.093 25.4869 178.159 25.8457 177.062 25.8457ZM191.479 62.12C190.55 62.12 189.674 62.0461 188.851 61.8984C188.027 61.7611 187.32 61.5764 186.729 61.3442L188.439 55.7233C189.199 55.9767 189.885 56.1245 190.497 56.1667C191.12 56.2089 191.653 56.1086 192.096 55.8658C192.55 55.6336 192.899 55.2167 193.141 54.615L193.442 53.8867L184.797 28.6799L192.904 28.6799L197.385 46.0333H197.638L202.182 28.6799H210.336L201.169 55.3275C200.726 56.6575 200.098 57.8292 199.285 58.8425C198.483 59.8664 197.443 60.6686 196.166 61.2492C194.899 61.8298 193.337 62.12 191.479 62.12ZM220.4 53.4117C218.848 53.4117 217.471 53.1531 216.267 52.6358C215.074 52.1081 214.13 51.3164 213.433 50.2608C212.747 49.1947 212.404 47.8594 212.404 46.255C212.404 44.9039 212.641 43.7639 213.116 42.835C213.591 41.9061 214.246 41.1513 215.08 40.5708C215.914 39.9902 216.874 39.5522 217.961 39.2566C219.049 38.9505 220.21 38.7447 221.445 38.6391C222.827 38.5125 223.941 38.3805 224.786 38.2433C225.63 38.0955 226.242 37.8897 226.622 37.6258C227.013 37.3513 227.208 36.9661 227.208 36.4699V36.3908C227.208 35.578 226.928 34.9499 226.369 34.5066C225.809 34.0633 225.055 33.8416 224.105 33.8416C223.081 33.8416 222.257 34.0633 221.635 34.5066C221.012 34.9499 220.616 35.5622 220.447 36.3433L213.306 36.0899C213.517 34.6122 214.061 33.2927 214.937 32.1316C215.824 30.9599 217.038 30.0416 218.579 29.3766C220.131 28.701 221.994 28.3632 224.168 28.3632C225.72 28.3632 227.15 28.548 228.459 28.9174C229.768 29.2763 230.908 29.8041 231.879 30.5008C232.85 31.1869 233.599 32.0313 234.127 33.0341C234.666 34.0369 234.935 35.1822 234.935 36.4699V53H227.651V49.6117H227.461C227.029 50.435 226.474 51.1317 225.799 51.7017C225.134 52.2717 224.347 52.6992 223.44 52.9842C222.542 53.2692 221.529 53.4117 220.4 53.4117ZM222.791 48.345C223.624 48.345 224.374 48.1761 225.039 47.8383C225.714 47.5005 226.253 47.0361 226.654 46.445C227.055 45.8433 227.256 45.1466 227.256 44.355V42.0433C227.034 42.1594 226.765 42.265 226.448 42.36C226.142 42.455 225.804 42.5447 225.435 42.6291C225.065 42.7136 224.685 42.7875 224.295 42.8508C223.904 42.9141 223.529 42.9722 223.171 43.025C222.442 43.1411 221.819 43.3205 221.302 43.5633C220.796 43.8061 220.405 44.1227 220.131 44.5133C219.867 44.8933 219.735 45.3472 219.735 45.875C219.735 46.6772 220.02 47.2894 220.59 47.7116C221.17 48.1339 221.904 48.345 222.791 48.345ZM248.303 39.13V53H240.561V28.6799H247.923V33.1449H248.192C248.731 31.6566 249.649 30.4902 250.947 29.6458C252.246 28.7908 253.792 28.3632 255.587 28.3632C257.297 28.3632 258.78 28.7485 260.036 29.5191C261.302 30.2791 262.284 31.3452 262.981 32.7174C263.688 34.0791 264.036 35.673 264.026 37.4991V53H256.283V39.0191C256.294 37.668 255.951 36.6124 255.254 35.8524C254.568 35.0924 253.613 34.7124 252.388 34.7124C251.575 34.7124 250.858 34.8919 250.235 35.2508C249.623 35.5991 249.148 36.1005 248.81 36.7549C248.483 37.4094 248.314 38.2011 248.303 39.13ZM269.711 53V28.6799H277.454V53H269.711ZM273.59 25.8457C272.503 25.8457 271.569 25.4869 270.788 24.7691C270.007 24.0407 269.616 23.1646 269.616 22.1407C269.616 21.1274 270.007 20.2618 270.788 19.5441C271.569 18.8157 272.503 18.4515 273.59 18.4515C274.688 18.4515 275.622 18.8157 276.393 19.5441C277.174 20.2618 277.564 21.1274 277.564 22.1407C277.564 23.1646 277.174 24.0407 276.393 24.7691C275.622 25.4869 274.688 25.8457 273.59 25.8457ZM283.337 53V48.5825L294.61 34.8549V34.6966H283.733V28.6799L303.841 28.6799V33.5249L293.391 46.825V46.9833H304.221V53H283.337ZM316.972 53.4117C315.42 53.4117 314.043 53.1531 312.839 52.6358C311.647 52.1081 310.702 51.3164 310.005 50.2608C309.319 49.1947 308.976 47.8594 308.976 46.255C308.976 44.9039 309.214 43.7639 309.689 42.835C310.164 41.9061 310.818 41.1513 311.652 40.5708C312.486 39.9902 313.446 39.5522 314.534 39.2566C315.621 38.9505 316.782 38.7447 318.017 38.6391C319.4 38.5125 320.513 38.3805 321.358 38.2433C322.202 38.0955 322.814 37.8897 323.194 37.6258C323.585 37.3513 323.78 36.9661 323.78 36.4699V36.3908C323.78 35.578 323.501 34.9499 322.941 34.5066C322.382 34.0633 321.627 33.8416 320.677 33.8416C319.653 33.8416 318.83 34.0633 318.207 34.5066C317.584 34.9499 317.188 35.5622 317.019 36.3433L309.879 36.0899C310.09 34.6122 310.633 33.2927 311.509 32.1316C312.396 30.9599 313.61 30.0416 315.151 29.3766C316.703 28.701 318.566 28.3632 320.74 28.3632C322.292 28.3632 323.722 28.548 325.031 28.9174C326.34 29.2763 327.48 29.8041 328.451 30.5008C329.422 31.1869 330.172 32.0313 330.7 33.0341C331.238 34.0369 331.507 35.1822 331.507 36.4699V53H324.224V49.6117H324.034C323.601 50.435 323.047 51.1317 322.371 51.7017C321.706 52.2717 320.92 52.6992 320.012 52.9842C319.115 53.2692 318.101 53.4117 316.972 53.4117ZM319.363 48.345C320.197 48.345 320.946 48.1761 321.611 47.8383C322.287 47.5005 322.825 47.0361 323.226 46.445C323.627 45.8433 323.828 45.1466 323.828 44.355V42.0433C323.606 42.1594 323.337 42.265 323.02 42.36C322.714 42.455 322.376 42.5447 322.007 42.6291C321.638 42.7136 321.258 42.7875 320.867 42.8508C320.476 42.9141 320.102 42.9722 319.743 43.025C319.014 43.1411 318.392 43.3205 317.874 43.5633C317.368 43.8061 316.977 44.1227 316.703 44.5133C316.439 44.8933 316.307 45.3472 316.307 45.875C316.307 46.6772 316.592 47.2894 317.162 47.7116C317.743 48.1339 318.476 48.345 319.363 48.345ZM350.86 28.6799V34.3799H335.518V28.6799L350.86 28.6799ZM338.732 22.8532H346.475V45.3525C346.475 45.8275 346.549 46.2128 346.696 46.5083C346.855 46.7933 347.082 46.9991 347.377 47.1258C347.673 47.2419 348.026 47.3 348.438 47.3C348.734 47.3 349.045 47.2736 349.372 47.2208C349.71 47.1575 349.963 47.1047 350.132 47.0625L351.304 52.6517C350.934 52.7572 350.412 52.8892 349.736 53.0475C349.071 53.2058 348.274 53.3061 347.345 53.3483C345.53 53.4328 343.973 53.2217 342.675 52.715C341.387 52.1978 340.4 51.3956 339.714 50.3083C339.038 49.2211 338.711 47.8541 338.732 46.2075V22.8532ZM355.703 53V28.6799H363.445V53H355.703ZM359.582 25.8457C358.495 25.8457 357.56 25.4869 356.779 24.7691C355.998 24.0407 355.608 23.1646 355.608 22.1407C355.608 21.1274 355.998 20.2618 356.779 19.5441C357.56 18.8157 358.495 18.4515 359.582 18.4515C360.68 18.4515 361.614 18.8157 362.384 19.5441C363.165 20.2618 363.556 21.1274 363.556 22.1407C363.556 23.1646 363.165 24.0407 362.384 24.7691C361.614 25.4869 360.68 25.8457 359.582 25.8457ZM380.618 53.4592C378.063 53.4592 375.868 52.9367 374.031 51.8917C372.205 50.8361 370.796 49.3689 369.803 47.49C368.822 45.6005 368.331 43.4102 368.331 40.9191C368.331 38.4174 368.822 36.2272 369.803 34.3483C370.796 32.4588 372.205 30.9916 374.031 29.9466C375.868 28.891 378.063 28.3632 380.618 28.3632C383.172 28.3632 385.362 28.891 387.188 29.9466C389.025 30.9916 390.434 32.4588 391.416 34.3483C392.408 36.2272 392.904 38.4174 392.904 40.9191C392.904 43.4102 392.408 45.6005 391.416 47.49C390.434 49.3689 389.025 50.8361 387.188 51.8917C385.362 52.9367 383.172 53.4592 380.618 53.4592ZM380.665 47.6166C381.594 47.6166 382.38 47.3316 383.024 46.7616C383.668 46.1916 384.159 45.4 384.497 44.3866C384.845 43.3733 385.019 42.2016 385.019 40.8716C385.019 39.5205 384.845 38.3383 384.497 37.3249C384.159 36.3116 383.668 35.5199 383.024 34.9499C382.38 34.3799 381.594 34.0949 380.665 34.0949C379.705 34.0949 378.892 34.3799 378.227 34.9499C377.572 35.5199 377.071 36.3116 376.723 37.3249C376.385 38.3383 376.216 39.5205 376.216 40.8716C376.216 42.2016 376.385 43.3733 376.723 44.3866C377.071 45.4 377.572 46.1916 378.227 46.7616C378.892 47.3316 379.705 47.6166 380.665 47.6166ZM405.505 39.13V53H397.762V28.6799H405.125V33.1449H405.394C405.932 31.6566 406.851 30.4902 408.149 29.6458C409.447 28.7908 410.994 28.3632 412.788 28.3632C414.498 28.3632 415.981 28.7485 417.237 29.5191C418.504 30.2791 419.486 31.3452 420.182 32.7174C420.89 34.0791 421.238 35.673 421.227 37.4991V53L413.485 53V39.0191C413.495 37.668 413.152 36.6124 412.456 35.8524C411.77 35.0924 410.814 34.7124 409.59 34.7124C408.777 34.7124 408.059 34.8919 407.436 35.2508C406.824 35.5991 406.349 36.1005 406.011 36.7549C405.684 37.4094 405.515 38.2011 405.505 39.13Z"
          fill="#0F172A"
        />
        <g clipPath="url(#clip0_101_579)">
          <path
            d="M7.28143 10.3377C7.28143 10.3377 4.30294 26.5599 15.263 32.6934C15.263 32.6934 25.07 20.0876 35.3506 30.446C39.1595 35.0859 37.581 39.0204 35.8241 41.3438C35.1996 42.1667 33.8819 41.6896 33.9231 40.6593C34.0604 36.9529 33.2368 31.0615 26.5592 31.0615C16.8208 31.0615 11.5501 50.9624 39.784 50.9624C39.784 50.9624 42.5909 69.7016 61.1893 63.4368C61.1893 63.4368 57.202 43.3353 73.2268 43.2662C77.9484 43.1209 79.3279 45.9837 79.6093 48.6252C79.7534 49.9943 78.1269 50.8379 77.1043 49.9182C75.6906 48.639 73.6042 47.6432 70.8522 48.6459C67.5443 49.8491 56.4471 66.099 78.6347 66.099C100.822 66.099 102.579 35.0928 86.4104 30.2524C86.4104 30.2524 89.7251 8.51215 69.3012 8.51215C53.8803 8.51215 59.6314 27.4588 65.9178 27.4588C72.2042 27.4588 69.3012 19.6243 74.2356 19.6243C79.17 19.6243 74.8464 33.1843 66.3914 33.1843C57.9363 33.1843 47.5185 17.785 56.852 9.05842C56.852 9.05842 47.1822 0.539335 35.7486 17.5775C35.7486 17.5775 31.9603 13.3525 26.7514 13.3525C21.5425 13.3525 7.27457 17.5775 7.27457 10.3515L7.28143 10.3377Z"
            fill="#ED0000"
          />
          <path
            d="M78.6347 71.9628C74.6543 71.9628 69.0336 71.4096 64.861 68.7751L64.4492 68.5123L63.0286 68.9963C59.9128 70.0474 56.9137 70.5798 54.1206 70.5798C42.6664 70.5798 37.5604 62.2267 35.5359 57.248L35.2957 56.6603L34.6712 56.6049C28.7073 56.0725 23.821 54.5512 20.1562 52.0965C15.5581 49.0124 12.9227 44.3726 12.9227 39.3731C12.9227 39.1726 12.9227 38.9652 12.9364 38.7646L12.9639 38.1285L12.408 37.8173C1.33818 31.6216 0.233258 17.9786 1.38622 10.2063L15.1669 11.4787V10.3446C15.1669 9.77762 15.0159 9.20369 14.7688 8.68507C16.6973 8.62284 18.9689 8.31167 20.9935 8.03508C23.2102 7.73083 25.118 7.46806 26.7583 7.46806C29.174 7.46806 31.5829 8.03508 33.93 9.14837L34.6094 9.47337L35.1241 8.92018C39.9624 3.69947 45.1645 1.05109 50.593 1.05109C55.5137 1.05109 58.952 3.27075 60.2011 4.225L60.702 4.61223L61.2717 4.33564C63.5707 3.20852 66.2747 2.63459 69.3012 2.63459C78.7308 2.63459 84.077 6.58988 86.9045 9.90209C91.2624 15.0191 92.3262 21.4775 92.4497 25.9929L92.4634 26.5461L92.9232 26.8435C100.273 31.5455 104.103 40.9843 102.675 50.8725C101.159 61.3762 93.136 71.9766 78.6347 71.9766V71.9628Z"
            fill="white"
          />
          <path
            d="M50.5931 2.07445C55.198 2.07445 58.4099 4.14891 59.5766 5.04092L60.5854 5.80847L61.7246 5.24837C63.8796 4.1904 66.4326 3.65104 69.3081 3.65104C78.3465 3.65104 83.4456 7.4058 86.129 10.559C90.2879 15.4408 91.3036 21.6504 91.4203 25.9998L91.4477 27.0993L92.3742 27.6939C99.3881 32.1817 103.032 41.2125 101.66 50.6996C100.205 60.7607 92.5252 70.9186 78.6416 70.9186C74.7984 70.9186 69.3836 70.3931 65.4169 67.8899L64.5865 67.3644L63.66 67.6825L62.7129 68.0075C59.6932 69.024 56.804 69.5426 54.1274 69.5426C43.2772 69.5426 38.4252 61.5905 36.4967 56.8538L36.0232 55.6852L34.7741 55.5746C28.9819 55.056 24.2602 53.5969 20.7395 51.2321C16.4365 48.3417 13.9659 44.0199 13.9659 39.3731C13.9659 39.1864 13.9659 38.9928 13.9796 38.8061L14.0345 37.5269L12.9296 36.9045C2.77254 31.2343 1.3931 18.9328 2.27841 11.3265L13.9522 12.4052L16.1963 12.6127V10.3377C16.1963 10.1026 16.1757 9.86748 16.1414 9.63929C17.7748 9.51482 19.5317 9.2728 21.1376 9.05153C23.3063 8.75419 25.1867 8.49834 26.7583 8.49834C29.0162 8.49834 31.2878 9.03079 33.4908 10.0818L34.8496 10.7249L35.8722 9.61855C40.5046 4.6122 45.4596 2.07445 50.5862 2.07445M50.5931 0C43.9223 0 38.4732 3.7755 34.3692 8.201C32.2417 7.19144 29.6681 6.42389 26.7583 6.42389C25.0494 6.42389 23.1072 6.68665 20.8631 6.99782C18.6258 7.30207 16.0865 7.65473 14.0894 7.65473C12.7649 7.65473 12.2845 7.50261 12.2639 7.49569C13.0188 7.75154 14.1375 9.05844 14.1375 10.3446L0.528381 9.07919C-0.905959 16.9206 -0.130454 31.9811 11.9208 38.73C11.9139 38.9444 11.907 39.1588 11.907 39.38C11.907 44.7321 14.7139 49.6831 19.6003 52.9677C23.4229 55.5331 28.4466 57.1028 34.5957 57.6491C37.2585 64.1974 43.188 71.6239 54.1274 71.6239C57.0304 71.6239 60.1393 71.0708 63.3649 69.9851L64.3188 69.6601C68.711 72.433 74.5582 73 78.6348 73C93.7537 73 102.113 61.957 103.691 51.0039C105.208 40.5002 101.042 30.7918 93.4723 25.9514C93.3419 21.3115 92.2507 14.5765 87.68 9.21057C84.7153 5.7324 79.122 1.5835 69.3013 1.5835C65.7257 1.5835 62.9462 2.34413 60.8187 3.38827C59.3913 2.29573 55.7745 0 50.5931 0Z"
            fill="#0F172A"
          />
          <path
            d="M2.97171 12.5228C2.97171 12.5228 4.3031 26.5599 15.2631 32.6934C15.2631 32.6934 25.0702 20.0876 35.3507 30.446C39.1596 35.0859 37.5812 39.0204 35.8243 41.3438C35.1998 42.1667 33.8821 41.6896 33.9233 40.6593C34.0605 36.9529 33.237 31.0615 26.5594 31.0615C16.821 31.0615 11.5503 50.9624 39.7842 50.9624C39.7842 50.9624 42.5911 69.7016 61.1895 63.4368C61.1895 63.4368 57.2021 43.3353 73.227 43.2662C77.9486 43.1209 79.328 45.9837 79.6094 48.6252C79.7535 49.9943 78.127 50.8379 77.1045 49.9182C75.6907 48.639 73.6044 47.6432 70.8524 48.6459C67.5445 49.8491 56.4472 66.099 78.6349 66.099C100.823 66.099 102.579 35.0928 86.4105 30.2524C86.4105 30.2524 89.7253 8.51215 69.3014 8.51215C53.8805 8.51215 59.6316 27.4588 65.918 27.4588C72.2044 27.4588 69.3014 19.6243 74.2358 19.6243C79.1702 19.6243 74.8466 33.1843 66.3915 33.1843C57.9365 33.1843 47.5186 17.785 56.8521 9.05842C56.8521 9.05842 47.1823 0.539335 35.7488 17.5775C35.7488 17.5775 31.9605 13.3525 26.7516 13.3525C21.5426 13.3525 8.6473 17.8472 2.96484 12.5366L2.97171 12.5228Z"
            fill="url(#paint0_linear_101_579)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_101_579"
            x1="50.047"
            y1="6.92865"
            x2="61.1179"
            y2="80.3146"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#780000" />
            <stop offset="1" stopColor="#C1121F" />
          </linearGradient>
          <clipPath id="clip0_101_579">
            <rect width="104" height="73" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  ),
  footer: {
    component: Footer,
  },
  search: {
    component: SearchAlgolia,
  },
  navbar: {
    extraContent: <ThemeSwitch />,
  },
  sidebar: {
    toggleButton: false,
  },
  head: function Head() {
    const router = useRouter();
    const { frontMatter } = useConfig();
    const asPath = router.asPath;
    const fullUrl = asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${asPath}`;
    let ogDescription = frontMatter.description;

    let ogTitle = `${frontMatter.title}`;
    let ogUrl: string;

    if (
      // If landing or there's no title & description show default og image
      asPath === "/" ||
      !frontMatter.title
    ) {
      ogTitle = "Seiyanization | From novice to SuperSeiyan";
      ogUrl = `${SITE_ROOT}/og/og-default.png`;
      ogDescription =
        "The first platform, exclusively built for SEI Ecosystem, to present collaborative effort of all ecosystem participants in order to enforce knowledge sharing.";
    } else if (frontMatter?.ogImage) {
      ogUrl = `${SITE_ROOT}${frontMatter.ogImage}`;
    } else {
      const title = frontMatter.title
        ? `&title=${encodeURIComponent(frontMatter.title)}`
        : "";

      const description = frontMatter.description
        ? `&description=${encodeURIComponent(frontMatter.description)}`
        : "";

      const author = frontMatter.author
        ? `&author=${encodeURIComponent(frontMatter.author)}`
        : "";

      const xUsername = frontMatter.xUsername
        ? `&x_username=@${encodeURIComponent(frontMatter.xUsername)}`
        : "";

      const type = getImageType(asPath);

      ogUrl = `${SITE_ROOT}/api/og?${title}${description}${xUsername}${author}${type}`;
    }

    return (
      <>
        <title>{ogTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Seiyanization" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta property="twitter:image" content={ogUrl} />
        <meta
          name="twitter:creator"
          content={frontMatter.xUsername ? frontMatter.xUsername : ""}
        />
        <meta property="og:image:secure_url" content={ogUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta
          property="og:type"
          content={frontMatter.author ? "article" : "webite"}
        />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta name="apple-mobile-web-app-title" content="Seiyanization" />
      </>
    );
  },
  editLink: {
    component: (props) => {
      const baseUrl =
        "https://github.com/NIMA-Enterprises/seiyanization/blob/main";

      const fullUrl = `${baseUrl}/${props.filePath}`;

      return (
        <p
          onClick={() => {
            window.open(fullUrl, "_blank");
          }}
          className={cn("cursor-pointer", props.className)}
        >
          Edit this page →
        </p>
      );
    },
  },
  feedback: {
    content: (
      <p
        onClick={() => {
          window.open(
            "https://github.com/NIMA-Enterprises/seiyanization",
            "_blank"
          );
        }}
        className={cn("cursor-pointer")}
      >
        Become a contributor →
      </p>
    ),
  },
  color: {
    hue: {
      dark: 93,
      light: 115,
    },
    saturation: {
      dark: 80,
      light: 78,
    },
  },
};

export default config;
