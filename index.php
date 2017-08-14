<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSOne</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css">
</head>
<body>    
<!-- Navbar -->
<div class="navbar">
    <div id="logo-container" class="navcont">
    <a id="logo" href="index.php"><img alt="logo" src="images/logo.png"></a>
    </div>
    <div id="menu" class="navcont">
        <a href="index.php" class="active button"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
           <div class="dropdown">
               <button class="dropbtn">Modules<i class="fa fa-caret-down" aria-hidden="true" style="padding:0px 5px 0px 5px;"></i></button>
              <div class="dropdown-content">
                <a href="networking.html">Introduction to Networking</a>
                <a href="sofEng.html">Software Engineering</a>
                <a href="programming.html">Programming 1</a>
                <a href="math.html">Mathematics for Computing</a>
              </div>
            </div>
    </div>
</div>
    
<!-- Header -->
<header class="header">
    <div class="mySlides">
      <img src="images/header/welcome.jpg" alt="welcome">
      <div class="context">
        <h1>Bachelor of Computing</h1> <p>This discipline is the systematic study of algorithmic processes that describe and transform information: their theory, analysis, design, efficiency, implementation, and application. The fundamental question underlying all the computing is 'What can be (efficiently) automated?'.</p>
        <button id="contact" class="button"><span>Contact Lecturer</span></button>
      </div>
    </div>
</header>

<!-- Content -->  
<h2 class="heading">Module Summary</h2>
<div class="content wrapper">
    <div class="cell one">
        <img src="images/modules/networking.jpg" alt="networking" class="module-img">
    </div>
    <div class="text-cell two">
        <i class="fa fa-connectdevelop" aria-hidden="true"></i>
        <h3>Inroduction to Networking</h3>
        <p>In the broadest terms, people like to view the Internet as a cloud, you put your data in one place, it comes out the place you want it to on the other side. In reality the internet is tens of thousands kilometers of fiber optic cable, hundreds of thousands to millions of kilometers of copper wire, and hardware and software connecting them all together in a redundant, fast, and self-sufficient network.</p>
        <a href="networking.html" class="more button">Read More</a>
    </div>
    <div class="text-cell three">
        <i class="fa fa-cubes" aria-hidden="true"></i>
        <h3>Software Engineering</h3>
        <p>Software Engineering is about teams and it is about quality. The problems to solve are so complex or large, that a single developer cannot solve them anymore. Software engineering is also about communication on a team and with internal and external stakeholders. Teams do not consist only of developers, but also of quality assurance testers, systems architects, system/platform engineers, customers, project managers and other stakeholders.</p>
        <a href="sofEng.html" class="more button">Read More</a>
    </div>
    <div class="cell four">
        <img src="images/modules/sofEng.jpg" alt="soft_eng" class="module-img">
    </div>
    <div class="cell five">
        <img src="images/modules/programming.jpg" alt="programming" class="module-img">
    </div>
    <div class="text-cell six">
        <i class="fa fa-magic" aria-hidden="true"></i>
        <h3>Programming 1</h3>
        <p>Programming is a process that leads from an original formulation of a computing problem to executable computer programs. Programming involves activities such as analysis, developing understanding, generating algorithms, verification of requirements of algorithms including their correctness and resources consumption, and implementation of algorithms in a target programming language. Source code is written in one or more programming languages</p>
        <a class="more button" href="programming.html">Read More</a>
    </div>
    <div class="text-cell seven">
        <i class="fa fa-bar-chart" aria-hidden="true"></i>
        <h3>Mathematics for Computing</h3>
        <p>This course covers elementary discrete mathematics for computer science and engineering. It emphasizes mathematical definitions and proofs as well as applicable methods. Topics include formal logic notation, proof methods; induction, well-ordering; sets, relations; and structural induction; state machines and invariants; recurrences; generating functions.</p>
        <a class="more button" href="math.html">Read More</a>
    </div>
    <div class="cell eight">
        <img src="images/modules/math.jpg" alt="maths" class="module-img">
    </div>
</div>
    

<?php
    // define variables and set to empty values
    $emailErr = "";
    $email = "";
    $name = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {   

        if (empty($_POST["email"])) {
        $emailErr = "*Email is required";
        echo "<script type='text/javascript'>alert('submission failed! You must include your email address')</script>";
        } else {
            $name = $_POST['name'];
            $email = sanitize_input($_POST["email"]);
            echo "<script type='text/javascript'>alert('submitted successfully! Thank you " . $name . " for your enquiry, the lecturer will contact you within 3 working days')</script>";
            // check if e-mail address is well-formed
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
              $emailErr = "*Invalid email format"; 
            }
        }
    }

    // function to sanitize all the user inputs
    function sanitize_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

?>

<!-- Modal -->
<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
        <h4>Contact Us</h4>
    </div>
    <div class="modal-body">
      <form id="modalForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name..">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="example@alustudent.com">
        <span class="error"><?php echo $emailErr;?></span>
        <br><br>
        
        <label>Message</label>
        <textarea name="message" rows="4" cols="50"></textarea>

        <input type="submit" name="submit" value="Submit">
      </form>


    </div>
  </div>

</div>

<script src="js/modal.js"></script>
    
<!-- Footer -->
<footer id="footer">  
  <div class="social_media">
    <a href="https://www.facebook.com/africanleadershipcollege/" target="_blank"><i class="fa fa-facebook-official"></i></a>
    <a href="https://www.instagram.com/alueducation/?hl=en" target="_blank"><i class="fa fa-instagram"></i></a>
    <a href="https://www.linkedin.com/company/african-leadership-unleashed" target="_blank"><i class="fa fa-linkedin"></i></a>
 </div>
 <p class="ALU"><a href="https://alueducation.com/" target="_blank">African Leadership College</a></p>
</footer>
</body>

<!-- All images are downloaded from pexels.com -->
</html>