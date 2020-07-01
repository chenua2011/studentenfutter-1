package de.dhbwka.studentenfutter.servlets;

import de.dhbwka.studentenfutter.bean.UserBean;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(urlPatterns = "/login")
public class LoginServlet extends AbstractServlet {

    @Override
    protected void handleDoGet(HttpServletRequest req, HttpServletResponse res) throws Exception {
        req.getRequestDispatcher(req.getContextPath().concat("/jsp/login.jsp")).forward(req, res);
    }

    @Override
    protected void handleDoPost(HttpServletRequest req, HttpServletResponse res) throws Exception {
        String inputUsername = req.getParameter("username");
        String inputPassword = req.getParameter("password");

        res.setContentType("text/html");

        var password = getDataAccess()
                .query("select password from user where name=?")
                .withParam(inputUsername)
                .collectAs(String.class)
                .get();

        if(password.isEmpty() || !password.get().equals(inputPassword)) {
            req.setAttribute("login_error", true);
            req.getRequestDispatcher(req.getContextPath().concat("/jsp/login.jsp")).forward(req, res);
            return;
        }

        //load shoppingcart


        ((UserBean)req.getSession().getAttribute("user")).login(inputUsername);
        res.sendRedirect(req.getContextPath().concat("/index"));
    }
}