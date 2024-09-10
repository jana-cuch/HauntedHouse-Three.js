import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sky } from "three/addons/objects/Sky.js";
import { Timer } from "three/addons/misc/Timer.js";

/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader();

//Floor
const floorAlphaTexture = textureLoader.load("./floor/alpha.webp");
const floorColorTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp"
);
const floorARMTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp"
);
const floorNormalTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.webp"
);
const floorDisplacementTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.webp"
);

floorColorTexture.colorSpace = THREE.SRGBColorSpace;

floorColorTexture.repeat.set(8, 8);
floorARMTexture.repeat.set(8, 8);
floorNormalTexture.repeat.set(8, 8);
floorDisplacementTexture.repeat.set(8, 8);

floorColorTexture.wrapS = THREE.RepeatWrapping;
floorARMTexture.wrapS = THREE.RepeatWrapping;
floorNormalTexture.wrapS = THREE.RepeatWrapping;
floorDisplacementTexture.wrapS = THREE.RepeatWrapping;

floorColorTexture.wrapT = THREE.RepeatWrapping;
floorARMTexture.wrapT = THREE.RepeatWrapping;
floorNormalTexture.wrapT = THREE.RepeatWrapping;
floorDisplacementTexture.wrapT = THREE.RepeatWrapping;

//Door
const doorAlphaTexture = textureLoader.load("./door/alpha.webp");
const doorColorTexture = textureLoader.load("./door/color.webp");
const doorAmbientOcclusionTexture = textureLoader.load(
  "./door/ambientOcclusion.webp"
);
const doorNormalTexture = textureLoader.load("./door/normal.webp");
const doorRoughnessTexture = textureLoader.load("./door/roughness.webp");
const doorMetalnessTexture = textureLoader.load("./door/metalness.webp");
const doorHeightTexture = textureLoader.load("./door/height.webp");

doorColorTexture.colorSpace = THREE.SRGBColorSpace;

doorColorTexture.repeat.set(1, 1);
doorAlphaTexture.repeat.set(1, 1);
doorNormalTexture.repeat.set(1, 1);
doorAmbientOcclusionTexture.repeat.set(1, 1);
doorRoughnessTexture.repeat.set(1, 1);
doorMetalnessTexture.repeat.set(1, 1);
doorHeightTexture.repeat.set(1, 1);

doorColorTexture.wrapS = THREE.RepeatWrapping;
doorAlphaTexture.wrapS = THREE.RepeatWrapping;
doorNormalTexture.wrapS = THREE.RepeatWrapping;
doorAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
doorRoughnessTexture.wrapS = THREE.RepeatWrapping;
doorMetalnessTexture.wrapS = THREE.RepeatWrapping;
doorHeightTexture.wrapS = THREE.RepeatWrapping;

doorColorTexture.wrapT = THREE.RepeatWrapping;
doorAlphaTexture.wrapT = THREE.RepeatWrapping;
doorNormalTexture.wrapT = THREE.RepeatWrapping;
doorAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
doorRoughnessTexture.wrapT = THREE.RepeatWrapping;
doorMetalnessTexture.wrapT = THREE.RepeatWrapping;
doorHeightTexture.wrapT = THREE.RepeatWrapping;

//Wall
const wallColorTexture = textureLoader.load(
  "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.webp"
);
const wallARMTexture = textureLoader.load(
  "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.webp"
);
const wallNormalTexture = textureLoader.load(
  "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.webp"
);

wallColorTexture.colorSpace = THREE.SRGBColorSpace;

wallColorTexture.wrapS = THREE.RepeatWrapping;
wallARMTexture.wrapS = THREE.RepeatWrapping;
wallNormalTexture.wrapS = THREE.RepeatWrapping;

wallColorTexture.wrapT = THREE.RepeatWrapping;
wallARMTexture.wrapT = THREE.RepeatWrapping;
wallNormalTexture.wrapT = THREE.RepeatWrapping;

//Roof
const roofColorTexture = textureLoader.load(
  "./roof/roof_slates_02_1k/roof_slates_02_diff_1k.webp"
);
const roofARMTexture = textureLoader.load(
  "./roof/roof_slates_02_1k/roof_slates_02_arm_1k.webp"
);
const roofNormalTexture = textureLoader.load(
  "./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.webp"
);

roofColorTexture.colorSpace = THREE.SRGBColorSpace;

roofColorTexture.wrapS = THREE.RepeatWrapping;
roofARMTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;

roofColorTexture.wrapT = THREE.RepeatWrapping;
roofARMTexture.wrapT = THREE.RepeatWrapping;
roofNormalTexture.wrapT = THREE.RepeatWrapping;

//Garden Wall
const gardenWallColorTexture = textureLoader.load(
  "./garden/broken_wall_1k/broken_wall_diff_1k.webp"
);
const gardenWallARMTexture = textureLoader.load(
  "./garden/broken_wall_1k/broken_wall_arm_1k.webp"
);
const gardenWallNormalTexture = textureLoader.load(
  "./garden/broken_wall_1k/broken_wall_nor_gl_1k.webp"
);

gardenWallColorTexture.colorSpace = THREE.SRGBColorSpace;

gardenWallColorTexture.wrapS = THREE.RepeatWrapping;
gardenWallARMTexture.wrapS = THREE.RepeatWrapping;
gardenWallNormalTexture.wrapS = THREE.RepeatWrapping;

gardenWallColorTexture.wrapT = THREE.RepeatWrapping;
gardenWallARMTexture.wrapT = THREE.RepeatWrapping;
gardenWallNormalTexture.wrapT = THREE.RepeatWrapping;

//Columns
const columnColorTexture = textureLoader.load(
  "./column/wood_peeling_paint_weathered_1k/wood_peeling_paint_weathered_diff_1k.webp"
);
const columnARMTexture = textureLoader.load(
  "./column/wood_peeling_paint_weathered_1k/wood_peeling_paint_weathered_arm_1k.webp"
);
const columnNormalTexture = textureLoader.load(
  "./column/wood_peeling_paint_weathered_1k/wood_peeling_paint_weathered_nor_gl_1k.webp"
);

columnColorTexture.colorSpace = THREE.SRGBColorSpace;

columnColorTexture.wrapS = THREE.RepeatWrapping;
columnARMTexture.wrapS = THREE.RepeatWrapping;
columnNormalTexture.wrapS = THREE.RepeatWrapping;

columnColorTexture.wrapT = THREE.RepeatWrapping;
columnARMTexture.wrapT = THREE.RepeatWrapping;
columnNormalTexture.wrapT = THREE.RepeatWrapping;

//Bushes
const bushColorTexture = textureLoader.load(
  "./bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.webp"
);
const bushARMTexture = textureLoader.load(
  "./bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.webp"
);
const bushNormalTexture = textureLoader.load(
  "./bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.webp"
);

bushColorTexture.colorSpace = THREE.SRGBColorSpace;

bushColorTexture.wrapS = THREE.RepeatWrapping;
bushARMTexture.wrapS = THREE.RepeatWrapping;
bushNormalTexture.wrapS = THREE.RepeatWrapping;

bushColorTexture.wrapT = THREE.RepeatWrapping;
bushARMTexture.wrapT = THREE.RepeatWrapping;
bushNormalTexture.wrapT = THREE.RepeatWrapping;

//Graves
const graveColorTexture = textureLoader.load(
  "./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp"
);
const graveARMTexture = textureLoader.load(
  "./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp"
);
const graveNormalTexture = textureLoader.load(
  "./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp"
);

graveColorTexture.colorSpace = THREE.SRGBColorSpace;

graveColorTexture.wrapS = THREE.RepeatWrapping;
graveARMTexture.wrapS = THREE.RepeatWrapping;
graveNormalTexture.wrapS = THREE.RepeatWrapping;

graveColorTexture.wrapT = THREE.RepeatWrapping;
graveARMTexture.wrapT = THREE.RepeatWrapping;
graveNormalTexture.wrapT = THREE.RepeatWrapping;

//Window
const windowColorTexture = textureLoader.load(
  "./window/brown_planks_09_1k/brown_planks_09_diff_1k.webp"
);
const windowARMTexture = textureLoader.load(
  "./window/brown_planks_09_1k/brown_planks_09_arm_1k.webp"
);
const windowNormalTexture = textureLoader.load(
  "./window/brown_planks_09_1k/brown_planks_09_nor_gl_1k.webp"
);

windowColorTexture.colorSpace = THREE.SRGBColorSpace;

windowColorTexture.wrapS = THREE.RepeatWrapping;
windowARMTexture.wrapS = THREE.RepeatWrapping;
windowNormalTexture.wrapS = THREE.RepeatWrapping;

windowColorTexture.wrapT = THREE.RepeatWrapping;
windowARMTexture.wrapT = THREE.RepeatWrapping;
windowNormalTexture.wrapT = THREE.RepeatWrapping;

/**
 * House
 */

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(25, 25, 100, 100),
  new THREE.MeshStandardMaterial({
    alphaMap: floorAlphaTexture,
    transparent: true,
    map: floorColorTexture,
    aoMap: floorARMTexture,
    roughnessMap: floorARMTexture,
    metalnessMap: floorARMTexture,
    normalMap: floorNormalTexture,
    displacementMap: floorDisplacementTexture,
    displacementScale: 0.3,
    displacementBias: -0.2,
  })
);
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

//House container
const house = new THREE.Group();
scene.add(house);

//Material
const wallMaterial = new THREE.MeshStandardMaterial({
  map: wallColorTexture,
  aoMap: wallARMTexture,
  roughnessMap: wallARMTexture,
  metalnessMap: wallARMTexture,
  normalMap: wallNormalTexture,
});
const roofMaterial = new THREE.MeshStandardMaterial({
  map: roofColorTexture,
  aoMap: roofARMTexture,
  roughnessMap: roofARMTexture,
  metalnessMap: roofARMTexture,
  normalMap: roofNormalTexture,
});
const gardenWallMaterial = new THREE.MeshStandardMaterial({
  map: gardenWallColorTexture,
  aoMap: gardenWallARMTexture,
  roughnessMap: gardenWallARMTexture,
  metalnessMap: gardenWallARMTexture,
  normalMap: gardenWallNormalTexture,
});
const columnMaterial = new THREE.MeshStandardMaterial({
  map: columnColorTexture,
  aoMap: columnARMTexture,
  roughnessMap: columnARMTexture,
  metalnessMap: columnARMTexture,
  normalMap: columnNormalTexture,
});

//First Floor
const firstFloor = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.5, 4),
  wallMaterial
);
firstFloor.position.y += 2.5 * 0.5;
house.add(firstFloor);

const subRoof1 = new THREE.Mesh(
  new THREE.BoxGeometry(4.4, 0.05, 4.4),
  roofMaterial
);
subRoof1.position.y = 0.05 * 0.5 + 2.5;
house.add(subRoof1);

const roof1Geometry = new THREE.ConeGeometry(3.12, 1, 4);
const uvAttributeRoof1 = roof1Geometry.attributes.uv;

for (let i = 0; i < uvAttributeRoof1.count; i++) {
  const u = uvAttributeRoof1.getX(i);
  const v = uvAttributeRoof1.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeRoof1.setXY(i, u * 2.5, v * 1); // Scale UVs, adjust the multiplier as needed
}

roof1Geometry.attributes.uv.needsUpdate = true;

const roof1 = new THREE.Mesh(roof1Geometry, roofMaterial);
roof1.position.y = 1 * 0.5 + 2.5 + 0.05;
roof1.rotation.y = Math.PI * 0.25;
house.add(roof1);

//Door
const door = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2.5, 0.1),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcclusionTexture,
    displacementMap: doorHeightTexture,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
);
door.position.set(0, 2.2 * 0.5, 1.96);
house.add(door);

//Second Floor
const secondFloor = new THREE.Mesh(
  new THREE.BoxGeometry(3, 2, 3),
  wallMaterial
);
secondFloor.position.y += 2 * 0.5 + 2.5 + 0.05;
house.add(secondFloor);

const subRoof2 = new THREE.Mesh(
  new THREE.BoxGeometry(3.25, 0.05, 3.25),
  roofMaterial
);
subRoof2.position.y = 0.05 * 0.5 + 2.5 + 0.05 + 2;
house.add(subRoof2);

const roof2Geometry = new THREE.ConeGeometry(2.3, 1, 4);
const uvAttributeRoof2 = roof2Geometry.attributes.uv;

for (let i = 0; i < uvAttributeRoof2.count; i++) {
  const u = uvAttributeRoof2.getX(i);
  const v = uvAttributeRoof2.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeRoof2.setXY(i, u * 2.5, v * 1); // Scale UVs, adjust the multiplier as needed
}

roof2Geometry.attributes.uv.needsUpdate = true;

const roof2 = new THREE.Mesh(roof2Geometry, roofMaterial);
roof2.position.y = 1 * 0.5 + 2.5 + 2 + 0.05 + 0.05;
roof2.rotation.y = Math.PI * 0.25;
house.add(roof2);

//Annex 1
const annex1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2, 1.5), wallMaterial);
annex1.position.y += 2 * 0.5 + 2.5 + 0.05;
annex1.position.z = 0.75 + 0.5;
house.add(annex1);

const subRoof3 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.05, 1.7),
  roofMaterial
);
subRoof3.position.y += 0.05 * 0.5 + 2.5 + 0.05 + 2;
subRoof3.position.z = 0.75 + 0.5;
house.add(subRoof3);

const roof3 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1, 4), roofMaterial);
roof3.position.y = 1 * 0.5 + 2.5 + 2 + 0.05 + 0.05;
roof3.position.z = 0.75 + 0.5;
roof3.rotation.y = Math.PI * 0.25;
house.add(roof3);

//Annex 2
const annex2Geometry = new THREE.BoxGeometry(1.5, 2.5 + 2 + 0.1, 1.5);
const uvAttributeAnnex2 = annex2Geometry.attributes.uv;

for (let i = 0; i < uvAttributeAnnex2.count; i++) {
  const u = uvAttributeAnnex2.getX(i);
  const v = uvAttributeAnnex2.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeAnnex2.setXY(i, u * 0.5, v * 1.75); // Scale UVs, adjust the multiplier as needed
}

annex2Geometry.attributes.uv.needsUpdate = true;

const annex2 = new THREE.Mesh(annex2Geometry, wallMaterial);
annex2.position.y += (2.5 + 2 + 0.1) * 0.5;
annex2.position.z = -(1 + 0.5);
house.add(annex2);

const subRoof4 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.05, 1.7),
  roofMaterial
);
subRoof4.position.y += 0.05 * 0.5 + 2.5 + 0.05 + 2;
subRoof4.position.z = -(1 + 0.5);
house.add(subRoof4);

const roof4 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1, 4), roofMaterial);
roof4.position.y = 1 * 0.5 + 2.5 + 2 + 0.05 + 0.05;
roof4.position.z = -(1 + 0.5);
roof4.rotation.y = Math.PI * 0.25;
house.add(roof4);

//Windows

const windowGeometry = new THREE.PlaneGeometry(0.125, 0.5);

const uvAttributeWindow = windowGeometry.attributes.uv;

for (let i = 0; i < uvAttributeWindow.count; i++) {
  const u = uvAttributeWindow.getX(i);
  const v = uvAttributeWindow.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeWindow.setXY(i, u * 0.1, v * 2); // Scale UVs, adjust the multiplier as needed
}

windowGeometry.attributes.uv.needsUpdate = true;

const windowMaterial = new THREE.MeshBasicMaterial({
  map: windowColorTexture,
  aoMap: windowARMTexture,
  color: "brown",
});

const wood1 = new THREE.Mesh(windowGeometry, windowMaterial);
wood1.position.set(0, 4.1, 2.01);
wood1.rotation.z = Math.PI * 0.725;
house.add(wood1);

const wood2 = new THREE.Mesh(windowGeometry, windowMaterial);
wood2.position.set(-0.05, 3.98, 2.011);
wood2.rotation.z = Math.PI * 0.34;
house.add(wood2);

const wood3 = new THREE.Mesh(windowGeometry, windowMaterial);
wood3.position.set(0.09, 4.03, 2.012);
wood3.rotation.z = Math.PI * 0.05;
house.add(wood3);

//Columns
function createColumn(x, z) {
  const column = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 2.5, 32),
    columnMaterial
  );
  column.position.set(x, 2.5 * 0.5, z);
  return column;
}

//Behind
const columnPositionsX = [];
for (let i = -2; i <= 2; i += 0.5) {
  columnPositionsX.push(i);
}

columnPositionsX.forEach((x) => {
  const column = createColumn(x, -2.05);
  house.add(column);
});

//Front
const columnPositionsFront = [1, -1.5, -1];
columnPositionsFront.forEach((x) => {
  const column = createColumn(x, 2.05);
  house.add(column);
});

//Left and Right
const columnPositionsZ = [];
for (let i = 2; i >= -2; i -= 0.5) {
  columnPositionsZ.push(i);
}

columnPositionsZ.forEach((z) => {
  const column = createColumn(-2.05, z);
  house.add(column);
});

columnPositionsZ.forEach((z) => {
  const column = createColumn(2.05, z);
  house.add(column);
});

//Tower

const towerGeometry = new THREE.CylinderGeometry(0.8, 0.8, 4, 6);
const uvAttributeTower = towerGeometry.attributes.uv;

for (let i = 0; i < uvAttributeTower.count; i++) {
  const u = uvAttributeTower.getX(i);
  const v = uvAttributeTower.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeTower.setXY(i, u * 2, v * 2); // Scale UVs, adjust the multiplier as needed
}

towerGeometry.attributes.uv.needsUpdate = true;

const tower = new THREE.Mesh(towerGeometry, wallMaterial);
tower.position.y += 4 * 0.5;
tower.position.x = 1.9;
tower.position.z = 1.9;

const towerSubRoof = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 0.8, 0.1, 6),
  roofMaterial
);
towerSubRoof.position.y = 0.1 * 0.5 + 4;
towerSubRoof.position.x = 1.9;
towerSubRoof.position.z = 1.9;

const towerSubRoof2 = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 0.05, 6),
  roofMaterial
);
towerSubRoof2.position.y = 0.05 * 0.5 + 4.1;
towerSubRoof2.position.x = 1.9;
towerSubRoof2.position.z = 1.9;

const towerRoof1Geometry = new THREE.CylinderGeometry(0.6, 1, 0.3, 6);
const uvAttributeTowerRoof1 = towerRoof1Geometry.attributes.uv;

for (let i = 0; i < uvAttributeTowerRoof1.count; i++) {
  const u = uvAttributeTowerRoof1.getX(i);
  const v = uvAttributeTowerRoof1.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeTowerRoof1.setXY(i, u * 3, v * 0.5); // Scale UVs, adjust the multiplier as needed
}

towerRoof1Geometry.attributes.uv.needsUpdate = true;

const towerRoof1 = new THREE.Mesh(towerRoof1Geometry, roofMaterial);
towerRoof1.position.y = 0.3 * 0.5 + 4 + 0.05 + 0.1;
towerRoof1.position.x = 1.9;
towerRoof1.position.z = 1.9;

const towerRoof2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.05, 0.6, 2, 6),
  roofMaterial
);
towerRoof2.position.y = 2 * 0.5 + 4 + 0.05 + 0.1 + 0.3;
towerRoof2.position.x = 1.9;
towerRoof2.position.z = 1.9;

house.add(tower, towerSubRoof, towerSubRoof2, towerRoof1, towerRoof2);

//Garden Walls

//Garden Wall 1
const gardenWall1Geometry = new THREE.BoxGeometry(1.5, 0.7, 0.2);
const uvAttributeGardenWall1 = gardenWall1Geometry.attributes.uv;

for (let i = 0; i < uvAttributeGardenWall1.count; i++) {
  const u = uvAttributeGardenWall1.getX(i);
  const v = uvAttributeGardenWall1.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeGardenWall1.setXY(i, u * 1, v * 1); // Scale UVs, adjust the multiplier as needed
}

gardenWall1Geometry.attributes.uv.needsUpdate = true;

const gardenWall1 = new THREE.Mesh(gardenWall1Geometry, gardenWallMaterial);
gardenWall1.position.y = 0.7 * 0.5;
gardenWall1.position.z = 5;
gardenWall1.position.x = 1.25;

//Garden Wall 2
const gardenWall2Geometry = new THREE.BoxGeometry(1.5, 0.7, 0.2);
const uvAttributeGardenWall2 = gardenWall2Geometry.attributes.uv;

for (let i = 0; i < uvAttributeGardenWall2.count; i++) {
  const u = uvAttributeGardenWall2.getX(i);
  const v = uvAttributeGardenWall2.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeGardenWall2.setXY(i, u * 1, v * 1); // Scale UVs, adjust the multiplier as needed
}

gardenWall2Geometry.attributes.uv.needsUpdate = true;

const gardenWall2 = new THREE.Mesh(gardenWall2Geometry, gardenWallMaterial);
gardenWall2.position.y = 0.7 * 0.5;
gardenWall2.position.z = 5;
gardenWall2.position.x = -1.25;

//Garden Wall 3
const gardenWall3Geometry = new THREE.BoxGeometry(2.8, 0.7, 0.2);
const uvAttributeGardenWall3 = gardenWall3Geometry.attributes.uv;

for (let i = 0; i < uvAttributeGardenWall3.count; i++) {
  const u = uvAttributeGardenWall3.getX(i);
  const v = uvAttributeGardenWall3.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeGardenWall3.setXY(i, u * 3, v * 0.5); // Scale UVs, adjust the multiplier as needed
}

gardenWall3Geometry.attributes.uv.needsUpdate = true;

const gardenWall3 = new THREE.Mesh(gardenWall3Geometry, gardenWallMaterial);
gardenWall3.position.y = 0.7 * 0.5;
gardenWall3.position.z = 3.5;
gardenWall3.position.x = -2 + 0.1;
gardenWall3.rotation.y = Math.PI * 0.5;

//Garden Wall 4
const gardenWall4Geometry = new THREE.BoxGeometry(2.8, 0.7, 0.2);
const uvAttributeGardenWall4 = gardenWall4Geometry.attributes.uv;

for (let i = 0; i < uvAttributeGardenWall4.count; i++) {
  const u = uvAttributeGardenWall4.getX(i);
  const v = uvAttributeGardenWall4.getY(i);

  // Adjust the UVs to make the texture uniform
  uvAttributeGardenWall4.setXY(i, u * 3, v * 0.5); // Scale UVs, adjust the multiplier as needed
}

gardenWall4Geometry.attributes.uv.needsUpdate = true;

const gardenWall4 = new THREE.Mesh(gardenWall4Geometry, gardenWallMaterial);
gardenWall4.position.y = 0.7 * 0.5;
gardenWall4.position.z = 3.5;
gardenWall4.position.x = -(-2 + 0.1);
gardenWall4.rotation.y = Math.PI * 0.5;

house.add(gardenWall1, gardenWall2, gardenWall3, gardenWall4);

//Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
  color: "#ccffcc",
  map: bushColorTexture,
  aoMap: bushARMTexture,
  roughnessMap: bushARMTexture,
  metalnessMap: bushARMTexture,
  normalMap: bushNormalTexture,
});

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.3, 0.3, 0.3);
bush1.position.set(0.8, 0.15, 5.2);
bush1.rotation.x = -0.75;

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.2, 0.2, 0.2);
bush2.position.set(1.15, 0, 5.2);
bush2.rotation.x = -0.75;

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.2, 0.2, 0.2);
bush3.position.set(-1.5, 0.1, 5.2);
bush3.rotation.x = -0.75;

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.3, 0.3, 0.3);
bush4.position.set(2.1, 0.1, 2.6);
bush4.rotation.x = -0.75;

const bush5 = new THREE.Mesh(bushGeometry, bushMaterial);
bush5.scale.set(0.2, 0.2, 0.2);
bush5.position.set(0.8, 0.05, -3.5);
bush5.rotation.x = -0.75;

const bush6 = new THREE.Mesh(bushGeometry, bushMaterial);
bush6.scale.set(0.3, 0.3, 0.3);
bush6.position.set(0.5, 0.1, -3.35);
bush6.rotation.x = -0.75;

const bush7 = new THREE.Mesh(bushGeometry, bushMaterial);
bush7.scale.set(0.3, 0.3, 0.3);
bush7.position.set(-4, 0.1, 1.3);
bush7.rotation.x = -0.75;

const bush8 = new THREE.Mesh(bushGeometry, bushMaterial);
bush8.scale.set(0.2, 0.2, 0.2);
bush8.position.set(-4.6, 0.05, 2);
bush8.rotation.x = -0.75;

const bush9 = new THREE.Mesh(bushGeometry, bushMaterial);
bush9.scale.set(0.2, 0.2, 0.2);
bush9.position.set(4.6, 0.05, -0.5);
bush9.rotation.x = -0.75;

const bushes = new THREE.Group();
scene.add(bushes);

for (let i = 0; i < 15; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 6 + Math.random() * 5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const bush = new THREE.Mesh(bushGeometry, bushMaterial);
  const rnd = Math.random();
  const size = 0.2 + rnd * 0.2;
  bush.scale.set(size, size, size);
  bush.position.set(x, Math.random() * 0.2, z);
  const rotation = (Math.random() - 0.5) * 0.4;
  bush.rotation.set(-0.75, rotation, rotation);

  bushes.add(bush);
}

house.add(bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, bush9);

//Graves
const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  map: graveColorTexture,
  aoMap: graveARMTexture,
  roughnessMap: graveARMTexture,
  metalnessMap: graveARMTexture,
  normalMap: graveNormalTexture,
});

const graves = new THREE.Group();
scene.add(graves);

for (let i = 0; i < 30; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 6 + Math.random() * 5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.position.set(x, Math.random() * 0.4, z);
  const rotation = (Math.random() - 0.5) * 0.4;
  grave.rotation.set(rotation, rotation, rotation);

  graves.add(grave);
}

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#86cdff", 0.275);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight("#86cdff", 1.5);
directionalLight.position.set(3, 2, -8);
scene.add(directionalLight);

//DoorLight
const doorLight = new THREE.PointLight("#ff7d46", 5);
doorLight.position.set(0, 2.2, 2.5);
house.add(doorLight);

//WindowLight
const windowLight = new THREE.PointLight("#ffff00", 5);
windowLight.position.set(0, 4.15, 2);
house.add(windowLight);

/**
 * Ghosts
 */

const ghost1 = new THREE.PointLight("#8800ff", 6);
const ghost2 = new THREE.PointLight("#ff0088", 6);
const ghost3 = new THREE.PointLight("#ff0000", 6);
scene.add(ghost1, ghost2, ghost3);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // segund commit
  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Shadows
 */
//Renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//Cast and receive
directionalLight.castShadow = true;
ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

firstFloor.castShadow = true;
firstFloor.receiveShadow = true;

secondFloor.castShadow = true;
secondFloor.receiveShadow = true;

annex1.castShadow = true;
annex1.receiveShadow = true;

annex2.castShadow = true;
annex2.receiveShadow = true;

tower.castShadow = true;
tower.receiveShadow = true;

gardenWall1.castShadow = true;
gardenWall2.castShadow = true;
gardenWall3.castShadow = true;
gardenWall4.castShadow = true;

roof1.castShadow = true;
subRoof1.castShadow = true;
subRoof2.castShadow = true;
subRoof3.castShadow = true;
subRoof4.castShadow = true;
roof2.castShadow = true;

floor.receiveShadow = true;

for (const grave of graves.children) {
  grave.castShadow = true;
  grave.receiveShadow = true;
}

bush1.castShadow = true;
bush1.receiveShadow = true;

bush2.castShadow = true;
bush2.receiveShadow = true;

bush3.castShadow = true;
bush3.receiveShadow = true;

bush4.castShadow = true;
bush4.receiveShadow = true;

bush5.castShadow = true;
bush5.receiveShadow = true;

bush6.castShadow = true;
bush6.receiveShadow = true;

bush7.castShadow = true;
bush7.receiveShadow = true;

bush8.castShadow = true;
bush8.receiveShadow = true;

bush9.castShadow = true;
bush9.receiveShadow = true;

for (const bush of bushes.children) {
  bush.castShadow = true;
  bush.receiveShadow = true;
}

//Mapping
directionalLight.shadow.mapSize.width = 256;
directionalLight.shadow.mapSize.height = 256;
directionalLight.shadow.camera.top = 8;
directionalLight.shadow.camera.right = 8;
directionalLight.shadow.camera.bottom = -8;
directionalLight.shadow.camera.left = -8;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 20;

ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 10;

ghost2.shadow.mapSize.width = 256;
ghost2.shadow.mapSize.height = 256;
ghost2.shadow.camera.far = 10;

ghost3.shadow.mapSize.width = 256;
ghost3.shadow.mapSize.height = 256;
ghost3.shadow.camera.far = 10;

/**
 * Sky
 */
const sky = new Sky();
sky.scale.set(100, 100, 100);
scene.add(sky);
sky.material.uniforms["turbidity"].value = 10;
sky.material.uniforms["rayleigh"].value = 3;
sky.material.uniforms["mieCoefficient"].value = 0.1;
sky.material.uniforms["mieDirectionalG"].value = 0.95;
sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);

/**
 * Fog
 */
scene.fog = new THREE.FogExp2("#04343f", 0.1);

/**
 * Animate
 */
const timer = new Timer();

const tick = () => {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  //Ghost
  const ghost1Angle = elapsedTime * 0.5;
  ghost1.position.x = Math.cos(ghost1Angle) * 4;
  ghost1.position.z = Math.sin(ghost1Angle) * 4;
  ghost1.position.y =
    Math.sin(ghost1Angle) *
    Math.sin(ghost1Angle * 2.34) *
    Math.sin(ghost1Angle * 3.45);

  const ghost2Angle = -elapsedTime * 0.7;
  ghost2.position.x = Math.cos(ghost2Angle) * 7;
  ghost2.position.z = Math.sin(ghost2Angle) * 7;
  ghost2.position.y =
    Math.sin(ghost2Angle) *
    Math.sin(ghost2Angle * 1.58) *
    Math.sin(ghost2Angle * 4.9);

  const ghost3Angle = elapsedTime * 0.38;
  ghost3.position.x = -Math.cos(ghost3Angle) * 6;
  ghost3.position.z = -Math.sin(ghost3Angle) * 6;
  ghost3.position.y =
    Math.sin(ghost3Angle) *
    Math.sin(ghost3Angle * 4.1) *
    Math.sin(ghost3Angle * 0.22);

  //Door Light

  doorLight.intensity =
    1 + Math.sin(elapsedTime * 8) * 0.5 + Math.random() * 0.7;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
