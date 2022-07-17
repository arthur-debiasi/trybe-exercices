const funcaoDEVerificacao = (params) => {
    if (typeof params === "object") {
        //aqui arremessa um novo erro no ar, para que seja capturado no catch
      throw new Error("este é um objeto, favor inserir um número.");
    }
    if (typeof params === "string") {
      throw new Error("esta é uma string, favor inserir um número");
    }
    if (typeof params === "boolean") {
      throw new Error("esta é um booleano, favor inserir um número");
    }
    if (typeof params !== "number") {
      throw new Error("este não é um número, favor inserir um número");
    }
  };
  
  const funcaoQueSoAceitaNumeros = (params) => {
    try {
      // Em algum momento, a função que verifica os erros deve aparecer dentro desse cara
      funcaoDEVerificacao(params);
      // Aqui o código de funcionamento normal da função
      console.log("Este é um número, parabéns");
    } catch (error) {
      // Aqui o código de funcionamento em caso de exceção
      console.log(error.message);
    } finally {
      // Aqui como proceder depois tanto do try quanto do catch
      console.log('Eu sempre apareço depois de erros e acertos.')
      console.log('---------------------------');
    }
  };
  
  funcaoQueSoAceitaNumeros(1);
  funcaoQueSoAceitaNumeros(true);
  funcaoQueSoAceitaNumeros('olá, cara');
  funcaoQueSoAceitaNumeros(funcaoDEVerificacao)
  