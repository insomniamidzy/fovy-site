import serial
import time
import asyncio
import websockets

# 設定 Arduino 串列埠
arduino_port = "/dev/tty.usbmodem101"  # Mac/Linux
# arduino_port = "COM3"  # Windows，請修改為正確的 COM 埠
baud_rate = 9600

# 建立 WebSocket Server
clients = set()

async def send_data():
    arduino = serial.Serial(arduino_port, baud_rate, timeout=1)
    time.sleep(2)  # 給 Arduino 初始化時間
    print("✅ WebSocket Server 啟動，開始接收 Arduino 訊號...")

    while True:
        try:
            data = arduino.readline().decode().strip()
            if data:
                print(f"Arduino 傳送: {data}")
                # 傳送給所有連接的 WebSocket 客戶端
                for client in clients:
                    await client.send(data)
        except Exception as e:
            print(f"❌ 錯誤: {e}")
            break

async def handler(websocket, path):
    clients.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        clients.remove(websocket)

async def main():
    async with websockets.serve(handler, "0.0.0.0", 8765):  # WebSocket Server 監聽 8765 埠
        await send_data()

# 啟動 WebSocket Server
asyncio.run(main())
