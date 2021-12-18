import cv2 as cv
import os

dir = r'D:\works\dataset'
new_dir = r'D:\works\new_dataset'

for d in os.scandir(dir):
    folder = d.path.split('\\')[-1]
    print(folder)
    for f in os.scandir(d.path):
        image = cv.imread(f.path)
        name = f.name.split('.')
        try:
            cv.imwrite(os.path.join(new_dir, folder,name[0] + '.png'), image)
        except:
            pass
