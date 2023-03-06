const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

header.innerHTML = `
    <div class="titulo">
        <p>configurações</p>
    </div>
    <div class="perfil">
        <div class="foto"></div>
        <div class="dados">
            <h2 id="nome1">Diogo Henrique</h2>
            <p class="email">diogoh.s.santos16@gmail.com</p>
            <p id="acessarconta">minha conta microsoft</p>
        </div>
    </div>
    <div id="aproveite">
        <h2  id="aproveiteh201">Aproveite ainda mais o Windows</h2>
        <p  id="aproveitep01">Com algumas seleções rápidas, você estará pronto para aproveitar a experiência completa da Microsoft.</p>
            <div id="aproveitep02div">
                <p id="aproveitep02">Vamos lá!</p>
            </div>
        <p id="aproveitep03">ignorar por enquanto</p>
    </div>
`;

main.innerHTML = `
<form action="" autocomplete="off" id="buscatudo">
            
<input type="search" name="busca" id="ibusca" placeholder="Localizar uma configuração"> 
<label for="ibusca">
    <span class="material-symbols-outlined" id="logolupa">
        search
        </span>
</label>

</input>
</form>
<div id="lista">
    <div class="listindividual" id="primeiralista">
        <span class="material-symbols-outlined" id="logocomput">
            computer
        </span>
        <div class="listacont">
            <p class="titulolist">Sistema</p>
            <p class="descriçao">Tela, som, notificações, energia</p>
        </div>
    </div>
    <div class="listindividual">
        <span class="material-symbols-outlined" id="logocomput">
            keyboard
        </span>
        <div class="listacont">
            <p class="titulolist">Dispositivos</p>
            <p class="descriçao">Bluetooth, impressoras, mouse</p>
        </div>
    </div>
    <div class="listindividual" id="telefone">
        <span class="material-symbols-outlined" id="logocomput">
            phone_iphone
        </span>
        <div class="listacont">
            <p class="titulolist">Telefone</p>
            <p class="descriçao">Vincular seu android, iphone</p>
        </div>
    </div>
    <div class="listindividual" id="redes">
        <span class="material-symbols-outlined" id="logocomput">
            bring_your_own_ip
        </span>
        <div class="listacont">
            <div class="titulolist">Rede e internet</div>
            <div class="descriçao">Tela de Fundo, tela de bloqueio, cores</div>
        </div>
    </div>
</div>
`;