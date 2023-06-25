import React, { useEffect, useRef } from 'react';
import KUTE from 'kute.js';
import 'kute.js/kute-svg';
import { pathDataToBezier } from "gsap/PathEditor";

const BackgroundAnimation = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);

  useEffect(() => {
    if (path1Ref.current && path2Ref.current && path3Ref.current) {
      const tween = KUTE.to(path1Ref.current, { path: path2Ref.current.getAttribute('d') }, { duration: 1000, repeat: 1, yoyo: true });
      tween.chain(KUTE.to(path1Ref.current, { path: path3Ref.current.getAttribute('d') }, { duration: 1000, repeat: 1, yoyo: true }));
      tween.start();
    }
  }, [path1Ref.current, path2Ref.current, path3Ref.current]);

  return (
    <div>
      <svg viewBox="0 0 675 900" width="675" height="900" xmlns="http://www.w3.org/2000/svg">
        <path ref={path1Ref} d="M127 0L129.5 8.8C132 17.7 137 35.3 129.3 53C121.7 70.7 101.3 88.3 98.5 106C95.7 123.7 110.3 141.3 107.7 159C105 176.7 85 194.3 78.7 212C72.3 229.7 79.7 247.3 92.5 265C105.3 282.7 123.7 300.3 124.2 318C124.7 335.7 107.3 353.3 93.8 371C80.3 388.7 70.7 406.3 69.3 423.8C68 441.3 75 458.7 78.2 476.2C81.3 493.7 80.7 511.3 80.8 529C81 546.7 82 564.3 89.7 582C97.3 599.7 111.7 617.3 122.2 635C132.7 652.7 139.3 670.3 130.8 688C122.3 705.7 98.7 723.3 96.2 741C93.7 758.7 112.3 776.3 116.2 794C120 811.7 109 829.3 97.8 847C86.7 864.7 75.3 882.3 69.7 891.2L64 900" fill="none" strokeLinecap="round" strokeLinejoin="miter" stroke="#F7770F" strokeWidth="16" />
      </svg>
      <svg viewBox="0 0 675 900" width="675" height="900" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <path ref={path2Ref} d="M115 0L116.8 8.8C118.7 17.7 122.3 35.3 127 53C131.7 70.7 137.3 88.3 126.7 106C116 123.7 89 141.3 78 159C67 176.7 72 194.3 72 212C72 229.7 67 247.3 71.3 265C75.7 282.7 89.3 300.3 96.8 318C104.3 335.7 105.7 353.3 101 371C96.3 388.7 85.7 406.3 77 423.8C68.3 441.3 61.7 458.7 73.7 476.2C85.7 493.7 116.3 511.3 118 529C119.7 546.7 92.3 564.3 82.7 582C73 599.7 81 617.3 84.8 635C88.7 652.7 88.3 670.3 86 688C83.7 705.7 79.3 723.3 77 741C74.7 758.7 74.3 776.3 84.8 794C95.3 811.7 116.7 829.3 116.7 847C116.7 864.7 95.3 882.3 84.7 891.2L74 900" fill="none" strokeLinecap="round" strokeLinejoin="miter" stroke="#F7770F" strokeWidth="16" />
      </svg>
      <svg viewBox="0 0 675 900" width="675" height="900" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <path ref={path3Ref} d="M98 0L91.5 8.8C85 17.7 72 35.3 73.2 53C74.3 70.7 89.7 88.3 103 106C116.3 123.7 127.7 141.3 119.7 159C111.7 176.7 84.3 194.3 86.3 212C88.3 229.7 119.7 247.3 120.8 265C122 282.7 93 300.3 78.7 318C64.3 335.7 64.7 353.3 77.8 371C91 388.7 117 406.3 124 423.8C131 441.3 119 458.7 117.3 476.2C115.7 493.7 124.3 511.3 130.3 529C136.3 546.7 139.7 564.3 139 582C138.3 599.7 133.7 617.3 124.3 635C115 652.7 101 670.3 95.8 688C90.7 705.7 94.3 723.3 97 741C99.7 758.7 101.3 776.3 106.2 794C111 811.7 119 829.3 111.3 847C103.7 864.7 80.3 882.3 68.7 891.2L57 900" fill="none" strokeLinecap="round" strokeLinejoin="miter" stroke="#F7770F" strokeWidth="16" />
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
