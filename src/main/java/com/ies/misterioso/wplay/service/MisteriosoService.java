package com.ies.misterioso.wplay.service;

import com.ies.misterioso.wplay.domain.Misterioso;
import com.ies.misterioso.wplay.domain.Ticket;
import com.ies.misterioso.wplay.service.dto.MisteriosoDTO;
import com.ies.misterioso.wplay.service.dto.RetornoTicketDTO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Misterioso.
 */
public interface MisteriosoService {

    /**
     * Save a misterioso.
     *
     * @param misteriosoDTO the entity to save
     * @return the persisted entity
     */
    MisteriosoDTO save(MisteriosoDTO misteriosoDTO);

    /**
     *  Get all the misteriosos.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<MisteriosoDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" misterioso.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    MisteriosoDTO findOne(Long id);

    /**
     *  Delete the "id" misterioso.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);

	List<Misterioso> findMisteriosoParticipa(int cantidadApuestas);

	List<MisteriosoDTO> getAllMisterioso();

	RetornoTicketDTO verificaGanador(Ticket ticket);
}
