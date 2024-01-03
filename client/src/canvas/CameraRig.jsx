import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from '../store/index'
import { Group } from "three";
import PropTypes from 'prop-types';
import { useRef } from "react";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // define a posição inicial do modelo
    let targetPosition = [-0.4, 0, 2];
    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2];
      if(isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // define a posição da câmera do modelo
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    // define a rotação do modelo suavemente
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 15, 0],
      0.25,
      delta
    )

  })


  return (
    <group ref={group}>
      {children}
    </group>
  )
}

CameraRig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CameraRig