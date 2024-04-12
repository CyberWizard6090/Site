

type Props = {Length:number}

export const GenerateID = ({Length= 8}: Props) => {
    var
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < Length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  
}

