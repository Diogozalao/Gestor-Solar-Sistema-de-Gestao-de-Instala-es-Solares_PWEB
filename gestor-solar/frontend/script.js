document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    sessionStorage.setItem("token", data.token);

    const payloadBase64 = data.token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));
    const role = payload.role;
    sessionStorage.setItem("role", role);

    alert("Login com sucesso!");

   if (role === "Cliente") {
  window.location = "registo_instalacao.html";
} else if (role === "Tecnico") {
  window.location = "tecnico_pesquisa.html";
} else if (role === "Gestor Operacoes") {
  window.location = "monitorizacao.html";
} else {
  alert("Role desconhecido! Role recebido: " + role);
}

  } else {
    alert(data.error || "Erro no login");
  }
});
