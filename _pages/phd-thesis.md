---
layout: page
permalink: /phd-thesis/
title: PhD thesis
description: Brief description of my PhD thesis and links to the related source codes.
nav: true

---

## TL;DR
With this thesis, we aim to build a bridge between the Deep Learning community and the Control System community, by proposing a control-system-engineer-friendly approach to the use of Recurrent Neural Networks (RNNs) for the identification and control of unknown (nonlinear) dynamical systems.

In fact, although the use of such deep learning tools in the control system design context is already widespread, the lack of a solid theoretical foundation has often raised skepticism toward these techniques.

We therefore seek to provide a first systematic approach towards the safe use of RNNs to learn dynamical systems from input-output data, and the design of model-based control laws (such as Model Predictive Control) relying on these RNN models.

<details>
	<summary><b>Abstract of the thesis</b></summary>
    <blockquote>
    This doctoral thesis aims to establish a theoretically-sound framework for the adoption of Recurrent Neural Network (RNN) models in the context of nonlinear system identification and model-based control design. 
    The idea, long advocated by practitioners, of exploiting the remarkable modeling performances of RNNs to learn black-box models of unknown nonlinear systems, and then using such models to synthesize model-based control laws, has already shown considerable potential in many practical applications.<br><br>

    On the other hand, the adoption of these architectures by the control systems community has been so far limited, mainly because the generality of these architectures makes it difficult to attain general properties and to build solid theoretical foundations for their safe and profitable use for control design. <br><br>

    To address these gaps, we first provide a control engineer-friendly description of the most common RNN architectures, i.e., Neural NARXs (NNARXs), Gated Recurrent Units (GRUs), and Long Short-Term Memory networks (LSTMs), as well as their training procedure.
    The stability properties of these architectures are then analyzed, using common nonlinear systems' stability notions such as the Input-to-State Stability (ISS), the Input-to-State Practical Stability (ISPS), and the Incremental Input-to-State Stability ({\delta}ISS).
    In particular, sufficient conditions for these properties are devised for the considered RNN architectures, and it is shown how to enforce these conditions during the training procedure, in order to learn provenly stable RNN models.<br><br>

    Model-based control strategies are then synthesized for these models.
    In particular, nonlinear model predictive control schemes are first designed: in this context, the model's {\delta}ISS is shown to  enable the attainment of nominal  closed-loop stability and, under a suitable design of the control scheme, also robust asymptotic zero-error output regulation.
    Then, an alternative computationally-lightweight control scheme, based on the internal model control strategy, is proposed, and its closed-loop properties are discussed.
    The performances of these control schemes are tested on several nonlinear benchmark systems, demonstrating the potentiality of the proposed framework. <br><br>

    Finally, some fundamental issues for the practical implementation of RNN-based control strategies are mentioned. 
    In particular, we discuss the need for the safety verification of RNN models and their adaptation in front of changes of the plant's behavior, the definition of RNN structures that exploit qualitative physical knowledge of the system to boost the  performances and interpretability of these models, and the problem of designing  control schemes that are robust to the unavoidable plant-model mismatch.
    </blockquote>
</details>

<br/>

## Thesis availability 
The doctoral thesis is freely available [at the following link](https://www.politesi.polimi.it/handle/10589/196384).

## Code
<div class="repo-card" data-repo="bonassifabio/ssnet"></div>

<br/>

## Errata
*Below are some errors and their corrections.*

#### Erratum 1
`Discovered: 2024-11-04 (thanks Eva Masero)` 

* The Lyapunov equation (A.215) should read $$\mathfrak{A}_d^{\prime} P \mathfrak{A}_d - P = -I_{2,2}$$

* Part of the left member of equation (A.218) is missing. Equation (A.218) should read
$$V_d(\chi_{k+1}, \hat{\chi}_{k+1}) - V_d(\chi_k, \hat{\chi}_k) \leq - \left\| \begin{bmatrix}
    \| x_k - \hat{x}_k \|_\infty \\ \| \xi_k - \hat{\xi}_k \|_\infty 
\end{bmatrix} \right\|_{I_{2,2}}^2 \leq - \frac{1}{n_x + n_y} \| \chi_k - \hat{\chi}_k \|_2^2$$


#### Erratum 2
`Discovered: 2024-11-04 (thanks Eva Masero)` 

Equation (4.13e) contains a typo. The third element should be $$-10^{-y}$$, with a minus sign.