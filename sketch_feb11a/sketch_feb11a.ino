const int buttonPin = 10;  // 按鈕引腳的編號
int buttonState = 0;      // 用於讀取按鈕狀態的變數

void setup() {
    // 將 PushButton 引腳初始化為 Input：
    pinMode(buttonPin, INPUT);
    Serial.begin(9600);
}

void loop() {
    // read the state of the pushbutton value:
    buttonState = digitalRead(buttonPin);

    // check if the pushbutton is pressed.
    // if it is, the buttonState is HIGH:
    if (buttonState == HIGH) {
        // print "已按下" to the serial monitor:
        Serial.println("已按下");
    }
}