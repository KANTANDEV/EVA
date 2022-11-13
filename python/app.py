import tkinter as tk
from main import ask, append_interaction_to_chat_log


# on cree la racine d enotre interface
root = tk.Tk()
# on cree le titre de notre interface
root.title("EMA")
# on definie la taille d'ouverture de notre interface
root.geometry("1080x720")
# on definie la taille minimum de notre interface
root.minsize(480, 360)
# definie l'arriere plan de notre interface avec une photo en fond
root.config(background='#edede9')
powered = tk.Label(root, text="Powered by NTE", bg="#edede9", fg="#000000")
powered.pack(side="bottom")
# on cree un cadre pour notre interface
log = tk.Frame(root, bg="#edede9")
# on definie une zone de texte pour envoyer des messages
text = tk.Text(root, bg="#edede9", fg="#000000", height=2)
text.pack(side="left", padx=10, pady=10, fill="both")
# on cree un bouton pour envoyer les messages
btn = tk.Button(root, text="Envoyer", bg="#1284CF", fg="#000000")
btn.pack(side="bottom", fill="x")
# on cree un bouton pour quitter l'interface


# on cree une boucle infinie pour que notre interface reste ouverte
root.mainloop()
