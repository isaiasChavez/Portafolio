import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/assets/cell_phone/scene.gltf");
    return (
      <>
        <primitive  object={gltf.scene} scale={1.2} />
      </>
    );
  };

export default Model