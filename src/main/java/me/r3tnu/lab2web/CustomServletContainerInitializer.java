package me.r3tnu.lab2web;

import java.util.Set;

import jakarta.servlet.ServletContainerInitializer;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import me.r3tnu.lab2web.pointChecker.PointChecker;
import me.r3tnu.lab2web.pointChecker.PointCheckerImp;
import me.r3tnu.lab2web.pointValidator.PointValidator;
import me.r3tnu.lab2web.pointValidator.PointValidatorImp;
import me.r3tnu.lab2web.servlets.AreaCheckServlet;
import me.r3tnu.lab2web.servlets.ControllerServlet;
import me.r3tnu.lab2web.servlets.ResourcesServlet;


public class CustomServletContainerInitializer implements ServletContainerInitializer {
    @Override
    public void onStartup(Set<Class<?>> c, ServletContext ctx) throws ServletException {
        ctx.addJspFile("indexJsp", "/jsp/index.jsp").addMapping("/index.jsp");
        ctx.addJspFile("errorJsp", "/jsp/error.jsp").addMapping("/error.jsp");
        ctx.addJspFile("resultsJsp", "/jsp/results.jsp").addMapping("/results.jsp");

        PointValidator pointValidator = new PointValidatorImp();
        PointChecker pointChecker = new PointCheckerImp();

        AreaCheckServlet areaCheckServlet = new AreaCheckServlet(pointValidator, pointChecker);

        ctx.addServlet("checkServlet", areaCheckServlet).addMapping("/check");

        ControllerServlet controllerServlet = new ControllerServlet();

        ctx.addServlet("controllerServlet", controllerServlet).addMapping("/controller");

        ResourcesServlet resourcesServlet = new ResourcesServlet();

        ctx.addServlet("resourcesServlet", resourcesServlet).addMapping("/resources/*");
    }
}