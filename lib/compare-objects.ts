export default async function compareObjects(
  obj1: Record<string, any>,
  obj2: Record<string, any>
) {
  const obj1Length: number = Object.keys(obj1).length;
  const obj2Length: number = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      (key: string) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
}
