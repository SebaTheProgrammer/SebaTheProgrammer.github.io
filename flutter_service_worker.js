'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8be154704836318fd685bfaea5b3f8ba",
"assets/AssetManifest.bin.json": "22b4f6a43ca0f1ef524b744d8a8abef0",
"assets/AssetManifest.json": "1733a0a79ce98ff44f13fa24bfc88e4f",
"assets/assets/audio/Level.mp3": "af01e0de2f9c251ccff8f78721d4be3a",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0001.png": "e1820062f6ab6485ec29065dd1c62410",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0002.png": "d981cdc83d2d69156c131e6a749a08e7",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0003.png": "0b123ab1b85d373566fc34f9cb52421c",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0004.png": "1cbdd83d5cc055c12ec86249fa195d55",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0005.png": "7833d840df25eb25a6002a66e86eb182",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0006.png": "a053adfc68022659a40d1dd485ec9b6f",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0007.png": "3b8d43f8d90e034126197aa484a7b6f4",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0008.png": "6f2e11638cdcac97dbab0ae51b9764d7",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0009.png": "e17bed49132cfbc5766ec3b49794c1f5",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0010.png": "a053adfc68022659a40d1dd485ec9b6f",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0011.png": "5ac4b6c7e2531d0a48b81a1911f28428",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0012.png": "42de3e78af49fe84cce5d054e13e5404",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0013.png": "270d90169f4be5c753484b5731d98f1c",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0014.png": "503be9b17f31a6c2317871b11c304b06",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0015.png": "49d0a369e27e479e18658b0a1ea5b0c8",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0016.png": "afc85fb2c748c7231891bd1c6709a88f",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0017.png": "b372967937196a401bad3f0d99d21163",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0018.png": "9b0696667d1a5df9d1611256dcd6839b",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0019.png": "1ae5c071164937916b18b99ef37d036d",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0020.png": "e3401351d89d8bf78006e0b2bf8759cf",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0021.png": "dcaef54c3d575e7ddf47abbe1ad653d5",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0022.png": "959599d376f06e78e0f31bbb8366416b",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0023.png": "6b9914e75ec509b2ec7bfb39d972ad8e",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0024.png": "e6b2ec0398e4d71e13074b6fc9251ad8",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0025.png": "4a7dd780a1b5a72d72879678c9308c3d",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0026.png": "a625f5dad911aaa064d8bb3fcb679a7f",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0027.png": "51199fc15162f9585bedc43b5919c3ce",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0028.png": "ec9a0c8a5e920561de7d08f8d9c4d4fb",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0029.png": "740f336da0fe923a54f266a117487d24",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0030.png": "49f4697d7cbbd72a100c6b8ad9cac272",
"assets/assets/images/Balloons/lv2-1_balloon_boy_death_0031.png": "1c574bf0c39063664b899e3cab73617f",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0001.png": "ce1d3d3ecc21be359240222dca0b514b",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0002.png": "5068416865a0f3d6ab68df2e771a059a",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0003.png": "ebc8af1027a5f6d83f2b4590f2977207",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0004.png": "9e213a937711808abac922a25d3a2eca",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0005.png": "2d732a3945ee0885516966f16ad50bf4",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0006.png": "671605b69eb42c2965ea66bb96af0424",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0007.png": "e71a0fae807a8274a775a6031753a45d",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0008.png": "28bd959ffb9292fc935198c170dc4fb1",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0009.png": "f05df85672b6a5dfc9e33d5bfb9ad692",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0010.png": "569c116a445a00a034dd7cc6e6aabf52",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0011.png": "eb0930ed6ebcf15e14787dc8be2c40c6",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0012.png": "1aff74b2d51d31bbeea56029ad6c78bf",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0013.png": "c91909f078c57cd68af8e651cd98df66",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0014.png": "728055d8224ae0f4ec5e2438167fc45c",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0015.png": "451c5d190661395eb622b6203c162155",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0016.png": "277804c64f02c6e92c453a822132b2b2",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0017.png": "d6c990399ec81a16460121d82fea35aa",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0018.png": "3f887b6222436c50ea7e316ea832accc",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0019.png": "bc9c7fb6202f21a09b5d0cfcd0f9cc8b",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0020.png": "31f2e4f0a04695ce0182dee4421a1b29",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0021.png": "1b988a2e995d0bcb52ba5c82a78dbb93",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0022.png": "4dba62d56f41d22c415bbe0ed30ffd15",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0023.png": "f13e718aec6e56a75b2542b7867a9e51",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0024.png": "64c3cee28278eccbe7ba354dc894a747",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0025.png": "ae753977149d9025b7490cf6dc1a0fcf",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0026.png": "56655aa561b31513b790c0265ffa5bb7",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0027.png": "5860ce0c7ccaf1c00c6aaf3c483b3e11",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0028.png": "f80cdc594a0f331e14446beb432fd2c7",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0029.png": "ae054af7eeaebe3e4d46616a0c2e0c9f",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0030.png": "4dba992009c6c2e7c6a8e7275acbfb2a",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0031.png": "2308131d867764e512f20c8a4442842c",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0032.png": "6e3ff13fcc6ed85980254ed0a62d0ccd",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0033.png": "2f2f2934b0b1b3fa66172eea992d00e2",
"assets/assets/images/Balloons/lv2-1_balloon_boy_idle_0034.png": "4bc22c639774ce3a972ab60d4da64ce3",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0001.png": "3cc9952e8dc8c73012a386cb90e0f1ca",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0002.png": "90412684ffd090f01f58ce74ed01ec26",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0003.png": "2ac88dd56c81f72e3c55f5499232c2f7",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0004.png": "28ecb4ef88cc370ad7a6032faf008933",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0005.png": "72e71d168d8cbe4ec9f05467d9275415",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0006.png": "434ad4062719f3e7795d9f75c4cc080c",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0007.png": "ab0dfcc68eabd1e5d3de990167ab4b6f",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0008.png": "b812191393ac1f0e6fb4da307c119a43",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0009.png": "1495146c50d3080e8f41871367b3e670",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0010.png": "9aa6ae514d950c863518b339c1c20b28",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0011.png": "6331db5cb5bd380490974504525af872",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0012.png": "60710adb28f9efd3037e4e035bfcae02",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0013.png": "51677a34fb8502715a951b430158b774",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0014.png": "d874eabc21e75b004933038f05c02ce3",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0015.png": "e968f3d0f13f3f29f8a0128c9e9f7ac1",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0016.png": "eaaf6cfd4fe8ae95a71e12d9849ea4df",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0017.png": "3b92d7876c3342314044ee696f730577",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0018.png": "b5041419a913ea48da1fc596529c114a",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0019.png": "cf3baa95f1e5333aa181514074cf0744",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0020.png": "5f0b3c9f27a25a5361822f9b3b7e08c0",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0021.png": "69940a8879ffd8aa0f61b4b2aff2ca8c",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0022.png": "f62f0f75523545944a2a704c22b0adf1",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0023.png": "39d838a38e1795d108cefc93e7f21aba",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0024.png": "25e207f3f84111f53e1146b2a52e36ac",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0025.png": "dad5461ef8644010abe48c0230903174",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0026.png": "1534dd7e757239db7d89e3578920c7ed",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0027.png": "70c8b13632808588531e31644622059e",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0028.png": "753596e6ba755e7ba09e86c3c0c38a70",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0029.png": "f25be7756136347c846443568c9d286d",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0030.png": "f439cf44cb337ddff89c531f53e45eec",
"assets/assets/images/Balloons/lv2-1_balloon_girl_death_0031.png": "7da2974dbc1b370d2c0d6df5c2b6e7bf",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0001.png": "c8d4344c4b0e0a6b75cb2a2739b68e68",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0002.png": "d662e9fbe267224f2803ff0bb2a138da",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0003.png": "2b7b6eaeba204a41da8ff84a0ad34db3",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0004.png": "7f8922525fd854b4827f972d503fef28",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0005.png": "d7e4fc0d2d08232a481f49f48be4dc83",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0006.png": "522b548e784d3a8fdb150bd554d1aee4",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0007.png": "5bac216280a7b0c137b68c787ed642f2",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0008.png": "2d1523d25c9f24c3557d9dfec2cfe271",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0009.png": "c911e982c41d37e9c113115b673a280a",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0010.png": "ae7ff918bf9d11fd92ae063f2cb3aa4c",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0011.png": "3ce4d32652419ef11faa850da8b60d62",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0012.png": "28fc79d5247c122b8727878653282516",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0013.png": "18ffb9b6cd1c8633cf9cf36985b64039",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0014.png": "f3ffad45d46f21a7ee13a6ed2ed3f6ce",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0015.png": "67c06a96db0ad465827042ea82437bfd",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0016.png": "e58eea4526e41cb7f2b92b5de2b4d078",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0017.png": "7ef95f7a142d3b2630891116d55d0c1d",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0018.png": "0aecb3237e6b9a198898d4fc11fb9160",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0019.png": "3f3f0446c7909c00ae9e4964b07ed947",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0020.png": "e13e4451c51e8c3cb41d35f5fe12d5fe",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0021.png": "4cd0c40db75fe62d3b36048048cbf0a1",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0022.png": "15e2387540d00915af90bf73d3b1d982",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0023.png": "bf04591b3c685336f2758a5d236a2b2c",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0024.png": "684165e2ddc3c0852cb851b8a9449cb8",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0025.png": "e8fad1e81b88d601abcb936dccb742da",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0026.png": "b8fb2c3d69ea55b7bfd22c251aecb255",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0027.png": "2c9bdc7afa29bda8bcfd5a7977254799",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0028.png": "c16335442b9b5cf6f8c36d25c4714371",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0029.png": "1287c4cad3b82ca928a22f15aa85d1ed",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0030.png": "0ab24921c54c418a5ba3a52b0fae2e7a",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0031.png": "0ab24921c54c418a5ba3a52b0fae2e7a",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0032.png": "352c11f1e2dff2b85f61330c60f5bf4e",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0033.png": "352c11f1e2dff2b85f61330c60f5bf4e",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0034.png": "d2ad431819e993497c87b081c691e63e",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0035.png": "5a2d4d0c0ebb35062d8c4dab3e605631",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0036.png": "f43925100f05ae01f74190ab59ac6f1d",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0037.png": "0571638992dc03f164f78e6861172efa",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0038.png": "b64c1a846f6dc645f993105ce5fecf2e",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0039.png": "e84ca6400b8bde90081d28acf7b2e38d",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0040.png": "9196378c48959b72f62a26d6d0b43ebc",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0041.png": "dcd4337331b66b24c418f9f3cf6100cd",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0042.png": "4c67235ce9ad9a48fc142e535ca6b3e5",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0043.png": "0d3a606a41c6daa7a90298d11d13afcf",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0044.png": "ade2d82af91015632084449618366898",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0045.png": "8b54d791935cc6571dffe6543d48c098",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0046.png": "a5c770d72da7703f0e74681cb6c6f75f",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0047.png": "e5090606481d641e8e2c8fda1c3ddf9d",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0048.png": "939ccba3c41910ba170aae7cfdbd2d21",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0049.png": "d0165f65e9c134207061b36ac88bcc44",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0050.png": "fb4c4e94b49a6bfaf48f4752714658c3",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0051.png": "c4098bda9363181efbde7945e72f69da",
"assets/assets/images/Balloons/lv2-1_balloon_girl_idle_0052.png": "60dc984e2a6581ab413264160aba0671",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0001.png": "63f416dd97e072336ebe8d72884c70bd",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0002.png": "c5a294b5bec7d05283a44062bba38bcf",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0003.png": "93ccf791d4f7698c6d2008a21e55929b",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0004.png": "b8b158610682977f75332bfe163dfc78",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0005.png": "ee6f26fa674a871283a8abd0613d7704",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0006.png": "064d0c7e123db3fc3519818ea2a9e955",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0007.png": "4f75f38ad16fda1697bbdabee215113a",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0008.png": "05201012b2df168355ff9c61e352d1f1",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0009.png": "03b148ec2f320d3cdb94f211484a56ba",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0010.png": "064d0c7e123db3fc3519818ea2a9e955",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0011.png": "e92b45c6d1539bbd6216dfddb5496d26",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0012.png": "c91ed94182b3adcad32d4fc1c1ebef73",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0013.png": "40800951a6fbe8d0eae26c138b5114a7",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0014.png": "702237b205e69a86c3751cb4941c70d1",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0015.png": "55210b805f0e0c16a416e712bc4db3bf",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0016.png": "78769f6d7352a868e131e50aa24012a5",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0017.png": "a96a3381a6a370d14e682bc50c5461d0",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0018.png": "bd8d9be8788e1ae2475df9e20fe435db",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0019.png": "56ec33516e7aeb1db041bb12be4d5285",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0020.png": "532996366cf3be5e92e24d88e9003fd0",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0021.png": "482935dc6d99dbda9350dcc6f5a7c820",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0022.png": "d32ea0771689ef726efec33c2e8ef24b",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0023.png": "b01647800485c4c8f90117a6e8a46d1e",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0024.png": "c7c4862945ce25b2b30465f03e17f18b",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0025.png": "69fc8e204584bb23604d77470f1af3c0",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0026.png": "55dcd8de9e7f6f4fe3ff8061ee370fab",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0027.png": "38bee21c7d72ab5eb46e3ff66674adc0",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0028.png": "0d48949da1a2a66964977c8ba4ce9d70",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0029.png": "080aeee11ee522da13d1a237b651f1b8",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0030.png": "338a34e30a812321b9d3f2a0899dbf8a",
"assets/assets/images/Balloons/lv2-1_balloon_pink_death_0031.png": "2ac66f779cba33841f6f6cb450540d35",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0001.png": "edc426076f793611feb816a3d55240b3",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0002.png": "9a555b966ff547d78171249bb25aedb6",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0003.png": "92923a0fbac6a7640d16405561d154d5",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0004.png": "29e22ba180c68a2d4423377b9b06e48b",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0005.png": "93f97f8eadfd61ea66b71dc7ccf1b7fe",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0006.png": "0c8abcd8479bd4aca5a952685dc5c504",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0007.png": "a3509b1699ab72d269ac275298d3ec60",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0008.png": "34ca407ed0ff74d6aef1fd9c7a8e3d39",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0009.png": "a54fc8ae6b235022675d925b2480d7cb",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0010.png": "2bbd84f118f245bb8ee8df7f0f5f36ef",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0011.png": "a2cb91ba7ea4e06538318989b353ba9f",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0012.png": "11e66ef45dc9d34f262d03b2a53a6fd6",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0013.png": "55e4564ed8406bedcef44473a4ffcbd0",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0014.png": "3fa988606eca0978531b65d696099f04",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0015.png": "2d1a4246e6b92733f97d1beb8d66618d",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0016.png": "5602677f9eec907d8f250a447190c4a8",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0017.png": "33662c69470a8721b3c4f6eab51f38dd",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0018.png": "44b3e0a8b1482613e64c576ebe747a32",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0019.png": "1cff991298fd4a0a60e4c25a28542ba5",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0020.png": "df871e7c795238c2724084666cc103af",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0021.png": "6bacc1d618953b6cb92eb20eb7449078",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0022.png": "abf39451410133bdfbce7df93507faf7",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0023.png": "4c40a649f9de1b0d73b5cb2ca80f777f",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0024.png": "fd32dbe256e9fcfb3595e9fe60e78564",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0025.png": "09c2dca2ff1388dd444ce897a72c17e4",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0026.png": "195c79a0e24d70e1ec65124f13330f2a",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0027.png": "b60ca22d9f6b1b685744a20623187425",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0028.png": "e7ee27602dbf67ae3683709019bb435f",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0029.png": "f1b9fb69cbf96a6d97074b543fc8db61",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0030.png": "9e5f6269d797b354741f0eeac8ad77cb",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0031.png": "b61ac157b7416731f6349d0c8f7c6753",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0032.png": "f220bb05a639ae8abdcc255f02824e18",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0033.png": "6276c618652411d110eb21d6949888bc",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0034.png": "553a083c34d2e52434bfdb3649e09977",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0035.png": "8851807d5bdb95fa46bc4c98fc165a98",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0036.png": "bfcbe338540166a886e3b813be1c9ac4",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0037.png": "6d22b2330777fb719cfac517cc15e2cc",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0038.png": "d908be1fa530896fa578bc1c025cdce7",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0039.png": "7ad690db3cf87a6942dfb8c2c53a5572",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0040.png": "7edee37d68a26487bfaf0e18a215e6af",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0041.png": "15e185f86ca01e38ec66714a201b1f5d",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0042.png": "d05e4220f217d8d7aaefe1f81b3dea71",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0043.png": "123ef407e21f806a3b5b052c6f54d849",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0044.png": "2d395072fb6ea60d655ae2e17648a7d1",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0045.png": "421e33225fcbc26355c39e1d320145e7",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0046.png": "74c8646f93c2abed9810d94a80fbf698",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0047.png": "e08fda5c51f3a523e25a8e6d3a2b12b6",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0048.png": "3222404d5bf8597f0ece5ef14bcb5f7d",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0049.png": "3adb38e6ec292f31499c576c996c5cc6",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0050.png": "f0fc5bf3ad3ad6e17ac28146831482bc",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0051.png": "b21183a5eb7d19953d0606692ffeb8ca",
"assets/assets/images/Balloons/lv2-1_balloon_pink_idle_0052.png": "21de78e56ecf5fb113ee67950478590d",
"assets/assets/images/Bullet.png": "0cc7b569d31da05bc2ed631283a71b15",
"assets/assets/images/CloseHillsLoop.png": "ab51b68ced552aea9fcf2f7bc9f55bf8",
"assets/assets/images/FarHillsLoop.png": "2b38c07b9b1955e49d93f6ea69e2e853",
"assets/assets/images/ForeGroundLoop.png": "1a59d3dc49f918299155e1a3781d9ed9",
"assets/assets/images/ForeGroundLoop2.png": "55fd904d93b397dc0c957e42a27a404a",
"assets/assets/images/Health.png": "0ca2e37f45c7e1b01312cd8870004256",
"assets/assets/images/Jump.png": "239f242bb908de11be0fcf19541c49b9",
"assets/assets/images/MainLoop.png": "983e50aba93ecd229816738cb5bf3803",
"assets/assets/images/Run.png": "8ee8a180fbb7a63e6742beb7556940b3",
"assets/assets/images/Shoot.png": "025cbed212a96bf37b1b799a04257687",
"assets/assets/images/SkyLoop.png": "8ffb491e9d65ec5f763b26a5a7fcc2c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9250092f1168036ced55b90f8e5a1b33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b8fb27e6e4dc511c84d59cc0855cda96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d636c925a4d8d801bcd3fd113cab8b8",
"/": "3d636c925a4d8d801bcd3fd113cab8b8",
"main.dart.js": "09b2c95681506d486acce7cfb049cd27",
"manifest.json": "7b3a05eab6b720180ca8cf5183d8a18d",
"version.json": "c7b24dc9c0ec556b894f7c4c6de65ee1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
