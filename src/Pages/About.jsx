import React from 'react';
import './About.css'
import Full_Kelion from '../assets/Untitled306_20250619161056.png'
import foto from '../assets/photo_2025-06-19_18-42-48.jpg'

function About() {
   return(
    <div className="About">
      <header></header>

      <div className="razdel header_about glow-gradient"></div>

      <div className="info">
      <aside className='info_side'>
        <h1>Трішки про автора цього портфоліо:)</h1>
        <h3>Жодна клавіша у процесі не постраждала!</h3>

        <p className='p_one'>  Я — Аня, маю добрих 16 років життєвого стажу. Родом з України й досі там проживаю. Закінчую перший курс коледжу, а також проходжу останній рік навчання в комп’ютерній школі. Крім стругання коду, я — діджитал-художниця-самоучка. Схиблена на таких істотах, як дракони. Ну а що я зроблю, що вони такі гарні??:3</p>
        <p className='p_two'>  Захоплююсь фотографуванням хмар — неважливо, яка пора доби: вони завжди красиві. Луни, світанки й заходи сонця, горизонт... Уся природа, усе, що нас оточує — це моя слабкість, якщо під моєю рукою телефон)</p>
        <p className='p_three'>  І хто міг подумати, що автор цього портфоліо — інтроверт, який обожнює слухати музику, малювати та фотографувати природу? Ах, так! І ще гуляти з музикою в навушниках.</p>

        <p className='p_four'><b>• Не треба чіпати Келіона за вуха! Йому не подобається таке. Майте совість!:)</b></p>     
      </aside>
      <aside className='foto_side'>
        <div className="circle">
          <img src={foto} alt="" />
        </div>
      </aside>
     </div>

     <div className="razdel about_main glow-gradient"></div>

    <main>
      <div className="soft_and_hardSkls">
         <div className="Soft_skills">
      <h1>Soft навички</h1>
      <div className="skill">
        <span>Командна робота</span>
        <div className="progress-bar"><div className="progress teamwork"></div></div>
      </div>
      <div className="skill">
        <span>Вирішення проблем</span>
        <div className="progress-bar"><div className="progress problem-solving"></div></div>
      </div>
      <div className="skill">
        <span>Керування часом</span>
        <div className="progress-bar"><div className="progress time-management"></div></div>
      </div>
      <div className="skill">
        <span>Комунікація</span>
        <div className="progress-bar"><div className="progress communication"></div></div>
      </div>
    </div>
    <div className="commentBox"></div>

    <div className="Hard_skills">
      <div className="skill">
        <h1>Hard навички</h1>
        <span>HTML&CSS</span>
      <div className="progress-bar2"><div className="progress html_css"></div></div>
      <span>FlexBox</span>
        <div className="progress-bar2"><div className="progress flexbox"></div></div>
      </div>
      <div className="skill">
        <span>JavaScript</span>
        <div className="progress-bar"><div className="progress javaScript"></div></div>
      </div>
      <div className="skill">
        <span>React</span>
        <div className="progress-bar"><div className="progress react"></div></div>
      </div>
      <div className="skill">
        <span>PHP</span>
        <div className="progress-bar"><div className="progress php"></div></div>
      </div>
    </div>
      </div>
    </main>

    <div className="razdel about_main glow-gradient"></div>

    <div className="services">
      <div className="zagol">
        <h1>Що я можу зробити:</h1>
      </div>
      <div className="serv_boxs">Зверстати макет</div>
      <div className="serv_boxs">Створити адаптивних сайтів</div>
      <div className="serv_boxs">Розробити сайт з використанням React</div>
      <div className="serv_boxs">Робота з базами даних (MySQL)</div>
    </div>

    <div className="razdel about_kelion glow-gradient"></div>

    <div className="infoBox_name">
      <div className="decor4 glow-gradient"></div>
      <div className="decor3 glow-gradient"></div>
      <div className="decor2 glow-gradient"></div>
      <div className="decor"></div>
      <div className="name">
        <h1>Келіон, або ж Келі</h1>
        <h3>～•Віртуальний маскот•～</h3>
      </div>
      <div className="decor"></div>
      <div className="decor2 glow-gradient"></div>
      <div className="decor3 glow-gradient"></div>
      <div className="decor4 glow-gradient"></div>
    </div>
    <div className="info_Kelion">
      <div className="info_blocks">
      <div className="infoBox_phys_d infobox">
        <h1>Фізичні дані</h1>
        <p>Зріст: 2м</p>
        <p>Довжина: 6м</p>
        <p>Вік: не розкриваэ</p>
        <p>Тип тіла: гнучкий</p>
        <p>Дуже пухнастий, шірсть м'яка, як у кошеняти</p>
      </div>
      <div className="infoBox_char infobox">
        <h1>Характер</h1>
        <p>• Допитливий</p>
        <p>• У міру грайливий</p>
        <p>• Доброзичливий</p>
        <p>• Гостинний</p>
        <p>• Тактильний</p>
        <p>• Інколи відволікається</p>
        <p>• Трішки образливий, коли чіпають за вуха</p>
        <p>• Іноді надто довірливий</p>
      </div>
      <div className="decor_box glow-gradient"></div>
      <div className="infoBox_img">
        <img src={Full_Kelion} alt="" />
      </div>
     <div className="infoBox_likes infobox">
        <h1>Любить</h1>
        <p>• Проглядати інші сайти, мандрувати всесвітньою павутиною</p>
        <p>• Інколи влаштовувати собі "відпустку", забираючись у далекий куток коду й засинаючи там</p>
        <p>• Коли його гладять по голові або щоках</p>
        <p>• Коли до нього навідуються в гості</p>
        <h1>Не любить</h1>
        <p>• Коли чіпають за вуха</p>
        <p>• Коли в коді трапляються збої, а він в цей час спить</p>
        <p>• Коли користувач довго нічого не робить</p>
     </div>
      <div className="infoBox_what_doeshg infobox">
        <h1>Чим займається</h1>
        <p>• Подорожує сайтами з метою знайти щось цікаве</p>
        <p>• Проглядає та змінює код своєї домівки</p>
        <p>• Нотує ідеї майбутніх змін у прихованих файлах</p>
        <p>• спостерігає за користувачем, який до нього завітав</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default About;