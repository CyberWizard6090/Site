

type Props = {}

export const getType = (File:string) => {
   let FileType: string | undefined = File.split(".").pop();
  return FileType
}