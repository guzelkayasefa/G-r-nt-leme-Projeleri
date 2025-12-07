import cv2
import mediapipe as mp

cap=cv2.VideoCapture(0)   # kendi bilgisayar kameramı kullanıyorum harici kameraysa 1  2 şekilinde değişir
cap.set(3,640)            # 3 genişliğe denk geliyor burda kameranin genişliğini 640 piksel yaptık
cap.set(4,480)            # 4 yüksekliğe denk geliyor burda kameranin yüksekliğini 480 piksel yaptık

mpHand=mp.solutions.hands             # hands kütühanesini kısa isim olarak aldık
hands=mpHand.Hands()                  # el algilama modelini çalıştırır(Bu model eklem noktalarını çıkarır) 
mpDraw=mp.solutions.drawing_utils     # Parmak noktalarını ve çizgilerinin  görüntülerini oluşturur 

tipIds=[4,8,12,16,20]

while True:
    
    success,img=cap.read()
    imgRGB=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)    # OpenCv  görüntüyü BGR şeklinde verir bu yüzden RGB şeklinde verir  
    
    results=hands.process(imgRGB)
    #print(results.multi_hand_landmarks)
    
    lmList=[]
    
    if results.multi_hand_landmarks:
        for handLms in results.multi_hand_landmarks:
            mpDraw.draw_landmarks(img,handLms,mpHand.HAND_CONNECTIONS)
            
            
            for id,lm in enumerate(handLms.landmark):
                h,w,c=img.shape
                cx,cy=int(lm.x*w),int(lm.y*h)
                lmList.append([id,cx,cy])
                
                #  işaret parmağinin ucu=8
                # if id ==8:
                #     cv2.circle(img,(cx,cy),9,(255,0,0),cv2.FILLED)
                #  işaret parmağının eklem noktasi    
                # if id ==6:
                #    cv2.circle(img,(cx,cy),9,(0,0,255),cv2.FILLED)
    
    if len(lmList) !=0:   # el tespit edilirse 
        fingers=[]
        
        #baş parmak
        
        if lmList[tipIds[0]][1]< lmList[tipIds[0]-1][1]:   #soldan sağa kullanım için uygundur baş parmak yukari aşağı değil sağa sola kıyaslanır
            fingers.append(1)
        else:
            fingers.append(0)
        # 4 parmak
        for id in range(1,5):
            
            if lmList[tipIds[id]][2] < lmList[tipIds[id] -2][2]:
                fingers.append(1)
                
            else:
                fingers.append(0)
                
        #print(fingers)
        
        totalF=fingers.count(1)
        #print(totalF)       

        cv2.putText(img,str(totalF),(30,125),cv2.FONT_HERSHEY_COMPLEX,4,(255,0,0),4)
    cv2.imshow("img",img)
    cv2.waitKey(1)