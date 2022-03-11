import { Button } from "native-base";

// Show camera to scan qr code, ask permission, click to scan
export default function ScanPage({ navigation }) {
  const popHandler = () => {
    navigation.pop();
    //navigation.goBack
  };

  return <Button onPress={popHandler}>Sign Up Page</Button>;
}
