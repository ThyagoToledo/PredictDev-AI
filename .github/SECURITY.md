# Segurança - Gestão de Variáveis de Ambiente

## 🔐 Configuração Segura de API Keys

PredictDev AI utiliza a API do Google Gemini para funcionalidades de IA. As chaves de API devem ser protegidas e **nunca** devem ser expostas no repositório público.

### ⚠️ Regras Importantes

- ❌ **NUNCA** exponha chaves de API no código-fonte
- ❌ **NUNCA** faça commit de arquivos `.env` com chaves reais
- ❌ **NUNCA** copie chaves de API em READMEs ou documentação pública
- ✅ **SEMPRE** use variáveis de ambiente do servidor de deployment
- ✅ **SEMPRE** configure chaves no painel de controle do seu provedor

### 📋 Arquivo `.env.example`

O arquivo `.env.example` contém **apenas placeholders** - é seguro ser incluído no repositório e serve como template para novos desenvolvedores.

```bash
cp .env.example .env    # Cria uma cópia local (não commitada)
```

Edite o arquivo `.env` local com suas chaves reais:

```env
VITE_GEMINI_API_KEY=sua_chave_de_api_aqui
```

### 🚀 Deploy no Vercel

#### Passo 1: Obtain API Key
1. Acesse [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Crie uma nova chave de API
3. **Copie a chave** (será visível apenas uma vez)

#### Passo 2: Configure no Vercel Dashboard
1. Vá para seu projeto no Dashboard do Vercel: https://vercel.com/dashboard
2. Selecione o projeto **PredictDev-AI**
3. Clique em **Settings** → **Environment Variables**
4. Adicione uma nova variável:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: Cole sua chave de API (obtida no Passo 1)
   - **Environments**: Development, Preview, Production (selecione todos)
5. Clique em **Save**

#### Passo 3: Re-deploy
1. Faça um novo commit e push para GitHub:
   ```bash
   git add .
   git commit -m "chore: update configuration"
   git push origin main
   ```
2. Vercel detectará automaticamente o push e fará o deploy com as novas variáveis de ambiente

### 🔄 Rotação de Chaves

Se suspeitar que uma chave foi comprometida:

1. **Desabilite a chave antigo** em [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. **Crie uma nova chave**
3. **Atualize no Vercel Dashboard** com a nova chave
4. Vercel fará re-deploy automaticamente com a nova chave

### 📦 Desenvolvimento Local

Para executar a aplicação localmente com a API:

```bash
# 1. Instale as dependências
npm install

# 2. Configure o arquivo .env local
cp .env.example .env
# Edite .env e adicione sua chave de API (para teste local apenas)

# 3. Execute o servidor de desenvolvimento
npm run dev
```

O arquivo `.env` é automaticamente ignorado pelo git (.gitignore):
```
.env
.env.local
.env.*.local
```

### 🛡️ Verificação de Segurança

Antes de fazer commit, verifique se não há chaves expostas:

```bash
# Procure por padrões de chave de API no código
git diff HEAD | grep -i "AIzaSy" || echo "✓ Nenhuma chave encontrada"
```

### 📞 Incidente de Segurança

Se você descobrir uma chave de API exposta:

1. **Notifique imediatamente** - não faça commit/push adicional
2. **Desabilite a chave** no console do Google
3. **Crie uma nova chave**
4. **Abra uma issue privada** no repositório (se aplicável)

### 🔗 Recursos

- [Google AI Studio - Gerenciar Chaves de API](https://aistudio.google.com/app/apikey)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [OWASP - Secrets Management](https://owasp.org/www-community/Sensitive_Data_Exposure)

---

**Última atualização**: 16 de abril de 2026
**Autor**: Full Stack Engineer
