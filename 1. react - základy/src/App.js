import Book from "./components/Book";

const App = () => {

  const books = [
      {
        id: 1,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
        title: "Harry Potter a Kámen mudrců",
        description: "Před deseti lety položili čarodějové Brumbál, Hagrid a McGonagallová na práh domu Vernona a Petunie Dursleyových miminko s jizvou na čele."
      },
      {
        id: 2,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
        title: "Harry Potter a Tajemná komnata",
        description: "Malý čaroděj Harry Potter je nucen trávit prázdniny u zlých příbuzných. Pomůže mu kamarád Ron, který ho přiletí v otcově létajícím autě zachránit. Máma jim sice vynadá, ale je ráda, že je Harry s nimi."
      },
      {
        id: 3,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
        title: "Harry Potter a Vězeň z Azkabanu",
        description: "Třetí školní rok nezačíná pro Harryho nejlépe. Nejprve poruší zákaz kouzlení mimo školu, když se nechá vyprovokovat urážkami strýcovy sestry Marge na adresu svých rodičů."
      },
      {
        id: 4,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
        title: "Harry Potter a Ohnivý pohár",
        description: "Navzdory zlým snům, které ho nepřestávají pronásledovat, vydá se Harry s Weasleyovými na čtyřsté dvacáté druhé famfrpálové mistrovství světa."
      },
      {
        id: 5,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
        title: "Harry Potter a Fénixův řád",
        description: "Harryho Pottera a jeho bratrance Dudleyho napadnou během prázdnin mozkomorové. Harrymu se sice podaří v poslední chvíli oba zachránit pomocí ochranného kouzla 'patrona', ale za jeho použití před mudly mu hrozí vyloučení ze školy."
      },
      {
        id: 6,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
        title: "Harry Potter a Princ dvojí krve",
        description: "Nový školní rok kazí boj mezi Voldemortovými přívrženci a stoupenci dobra, které nepříjemně zasahují do života všech budoucích čarodějů. Bradavice přestávají být spolehlivým přístavem bezpečí a Harry má podezření, že hrozba je ukryta přímo ve zdech školy."
      },
      {
        id: 7,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
        title: "Harry Potter a Relikvie smrti - část 1.",
        description: "Dlouho obávaná válka se zlem začala, Voldemortovi Smrtijedi kontrolují ministerstvo kouzel i Bradavice a zatýkají všechny, kdo by se jim chtěli postavit."
      },
      {
        id: 8,
        image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
        title: "Harry Potter a Relikvie smrti - část 2.",
        description: "Potterovská fantasy sága se uzavírá, tímto dílem nelítostný zápas dobra se zlem vrcholí. Trojice věrných kamarádů - Harry, Hermiona a Ron - plní úkol, který po zásahu smrtící kletbou nemohl splnit moudrý Albus Brumbál."
      },
  ];

    return (
      <div className="all-books">
        {
          books.map((item) => <Book image={item.image} title={item.title} description={item.description} />)
        }
      </div>
    )
}

export default App;