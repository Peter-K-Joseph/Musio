import os
import music_tag
import csv
import os

def music_update_services():
    filelist = []
    path ="C:\\Users\\"
    num_songs = 0
    prev_directory = ""
    
    for root, dirs, files in os.walk(path):
        for file in files:
            if (root.find(".") != -1 or root.find("AppData") != -1):
                continue
            else:
                if (prev_directory != root):
                    os.system('cls' if os.name == 'nt' else 'clear')
                    print("[NOTIFY] System Scan in Progress...\n[SYSTEM SCAN] >> Scanning " + root)
                    prev_directory = root
                ext = os.path.splitext(file)[-1].lower()
                if (ext == ".mp3" or ext == ".aac" or ext == ".flac" or ext == ".m4a" or ext == ".ogg" or ext == ".opus" or ext == ".wav"):
                    try:
                        song_attr = music_tag.load_file(os.path.join(root,file))
                        filelist.append([os.path.join(root,file),song_attr['title'], song_attr['artist'], song_attr['album'], song_attr['artwork'], song_attr['genre'], song_attr['tracknumber']])
                        num_songs = num_songs + 1
                        print(str(num_songs) + " songs parsed")
                    except:
                        print(str(num_songs) + " songs parsed")
                        continue
        
        with open("./music_list.csv", 'w', newline='', encoding='UTF-8') as stream:
            csv.writer(stream).writerows(filelist)

print("WELCOME TO MUSIO BACKEND SERVICE\nSelect an option to continue")
music_update_services()
