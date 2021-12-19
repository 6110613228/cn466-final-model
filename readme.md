![1](https://user-images.githubusercontent.com/61135042/146673161-fb729d2f-79df-439e-9743-281dbff81c8a.png)

# CN466-final-line

## Other work

### [API](https://github.com/6110613228/cn466-final-api)

### [Line&LIFF](https://github.com/6110613228/cn466-final-line)

### [MQTT (Arduino)](https://github.com/6110613228/cn466-final-mqtt)

---

## Table of contents

- [CN466-final-line](#cn466-final-line)
  - [Other work](#other-work)
    - [API](#api)
    - [Line&LIFF](#lineliff)
    - [MQTT (Arduino)](#mqtt-arduino)
  - [Table of contents](#table-of-contents)
  - [Model](#model)
    - [หน้าที่](#หน้าที่)
    - [Detail](#detail)
  - [Demo](#demo)

---

## Model

### หน้าที่

เป็นการสร้าง machine learning model เพื่อทำการ predict รูปว่ารูปท้องฟ้าที่ส่งเข้ามาเป็นท้องฟ้าที่

1. Clear
2. Cloudy
3. Night

เพื่อนำคลาสที่ได้มาใช้นับคะเเนนว่าควรหรือไม่ที่จะรดน้ำ

### Detail

TensorflowJS เป็นเครื่องมือที่ทำให้เราสามารถสร้าง machine learning model เพื่อรันใน nodeJS, webpack, javascript ได้โดยการพัฒนาเราสามารถที่จะพัฒนา model ด้วยภาษา python ได้โดยปกติเเละเราสามารถเซฟ model เพื่อใช้กับ nodeJS ได้

model.py เป็นไฟล์ที่ทำการพัฒนา model โดยใช้ภาษา python เเละทำการเซฟ model เป็น tensorflowjs

model.js เป็นตัวอย่างในการใช้ `@tensorflow/tfjs-node` เพื่อโหลด model, data preprocessing (Resize image, expand image dimension) เเละทำการ predict class

---

## Demo

[Link](https://www.youtube.com/watch?v=3tx3XmVQmxg)
