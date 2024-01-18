export function createRGBValues(percentage: number) {
    if (percentage < (100/6)) {
      // increase [255, 0-> 255,0] (position 1, to 255)
      return increaseIntensityValue(0,1,percentage);
    } else if (percentage < (100/6)*2) {
      // decrease [255->0, 255, 0] (position 0, to 0)
      return decreaseIntensityValue(1,0,percentage)
    } else if (percentage < (100/6)*3) {
      // increase 0,255,0->255] (position 2, to 255)
      return increaseIntensityValue(1,2,percentage)
    } else if (percentage< (100/6)*4) {
      // decrease [0,255->0,255] (position 1, to 0)
      return decreaseIntensityValue(2,1,percentage)
    } else if (percentage < (100/6)*5) {
      // increase [0->255, 0, 255] (position 0 to 255)
      return increaseIntensityValue(2,0,percentage)
    } else {
      // decrease [255,0,255->0] (position 2 to 0)
      return decreaseIntensityValue(0,2,percentage);
    }
  }
  export function calcIntensity(percentage: number): number {
    return (percentage % (100/6))/(100/6)
  }

  type IntensityValueType = {
    maxPosition: number;
    varPosition: number;
    percentage: number;
  }
  
  export function increaseIntensityValue(maxPosition: number, varPosition: number, percentage: number): number[] {
    const intensity = calcIntensity(percentage)
    const rgb = [0, 0, 0]
    rgb[maxPosition] = 255
    rgb[varPosition] = Math.floor((256 * intensity))
    return rgb
  }
  
  // console.log(increaseIntensityValue(1,2,40))
  
  export function decreaseIntensityValue(maxPosition: number, varPosition: number, percentage: number) {
    const intensity = calcIntensity(percentage)
    const rgb = [0, 0, 0]
    rgb[maxPosition] = 255
    rgb[varPosition] = 255-Math.floor((256 * intensity))
    return rgb
  }